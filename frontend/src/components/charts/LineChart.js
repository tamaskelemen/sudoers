import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {chart} from '../../client/api';
import {convertDateToString} from '../../utils';
import 'chartjs-adapter-date-fns';


const generatePredictions = (points, dueDate, risk = 0.001, frequency = 3) => {
  const dateInFuture = new Date();
  dateInFuture.setDate(dateInFuture.getDate() + 60)

  const lastDate = new Date('2021-10-01');
  let lastRate = parseFloat(points.length ? points[points.length - 1].y : '');
  const prediction = [];

  while (lastDate <= (dueDate || dateInFuture) && prediction.length < 200) {
    const newRate = lastRate * (1 - ((Math.random() * 10 - 5) * risk))

    prediction.push({ x: convertDateToString(lastDate), y: newRate })

    lastDate.setDate(lastDate.getDate() + 1)
    lastRate = newRate;
  }

  return prediction
    .filter((item, index) => index % frequency === 0);
}

const getBestRatePoints = (data, points) => {
  const bestRate = points.reduce((best, point) => Math.max(best, parseFloat(point.y)), 0)

  const startDate = data[0].x;
  const endDate = points[points.length - 1].x

  return [{ x: startDate, y: bestRate }, { x: endDate, y: bestRate }]
}

const getBestRate = (bestRatePoints) => bestRatePoints[0].y

const LineChart = (props) => {
  const { source, setSource, target, setTarget, dueDate, setDueDate, rate, setRate } = props;

  const [datapoints, setDatapoints] = useState([]);
  const [predictedDataPoints, setPredictedDataPoints] = useState([]);
  const [predictedBestRatePoints, setPredictedBestRatePoints] = useState(undefined);

  const [periodStart, setPeriodStart] = React.useState(new Date());
  const [periodEnd, setPeriodEnd] = React.useState(new Date());
  const [ssource, setSsource] = React.useState({
    value: 2,
    label: 'Source',
    note: 'Select source currency',
  });
  const [ttarget, setTtarget] = React.useState({
    value: 2,
    label: 'Target',
    note: 'Select target currency',
  });

  useEffect(() => {
    chart('2021-05-01', convertDateToString(dueDate || new Date()), source.value, target.value)
      .then(response => {
        const data = convertResponseToData(response);
        setDatapoints(data);

        const points = generatePredictions(data, dueDate)
        setPredictedDataPoints(points);

        const bestRatePoints = getBestRatePoints(data, points);
        setPredictedBestRatePoints(bestRatePoints);

        const bestRate = getBestRate(bestRatePoints);
        setRate(bestRate)
      })
  }, [source, target, dueDate])

  // useEffect(() => {
  //   if (periodStart != null && periodEnd != null && (source.currency !== '' &&
  //     source.currency !== undefined) && (target.currency !== '' && target.currency !== undefined)) {
  //     const formattedPeriodStart = format(periodStart, 'yyyy-MM-dd')
  //     const formattedPeriodEnd = format(periodEnd, 'yyyy-MM-dd')
  //     chart(formattedPeriodStart, formattedPeriodEnd, source.currency, target.currency)
  //       .then(response => {
  //         let result = convertResponseToData(response);
  //         // let copy = result.map(entry => {entry.x});
  //         let res = result.map(item => item.x = new Date(item.x).getTime());
  //         let last = res[res.length - 1];
  //         let newElements = [];
  //         for (let i = 0; i < 10; i++) {
  //           last = last + 86400000;
  //
  //           newElements.push(last);
  //         }
  //         console.log(newElements)
  //         // newElements.forEach(item => {
  //         //   result.push({x: format(new Date(item), 'yyyy-MM-dd'), y: step(item, res, result.map(item => item.y))})
  //         // })
  //         // let step = step(newElements[1], res, result.map(item => item.y));
  //         console.log();
  //         setDatapoints(result);
  //       });
  //   }
  // }, [periodStart, periodEnd, source, target]);

  const convertResponseToData = (response) => {
    return (response.data || [])
      .filter((item, index) => index % 3 === 0)
      .map(entry => ({ x: entry.date, y: entry.rate }));
  }

  const data = {
    datasets: [
      {
        label: `${source.label}-${target.label}`,
        data: datapoints,
        borderColor: '#00b9ff',
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.8,
      },
      {
        label: `${source.label}-${target.label} Prediction`,
        data: predictedDataPoints,
        borderColor: '#ffb717',
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.8,
        borderDash: [5, 5],
      },
      {
        label: `${source.label}-${target.label} Best`,
        data: predictedBestRatePoints,
        borderColor: '#37517e',
        fill: false,
        tension: 0.8,
        borderWidth: 2,
        borderDash: [5, 5],
      }

    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      }
    },
    elements: {
      line: {
        fill: false,
      },
      point: {
        radius: 0,
      }
    },
    // spanGaps: 1000 * 60 * 60 * 24 * 7, // 2 days
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month'
        },
        grid: {
          display: false,
          drawTicks: false,
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Rate'
        },
        grid: {
          color: '#f2f5f7'
        }
      }
    }
  };

  return (
    <div className="m-a-3">
      {/*<DateLookup*/}
      {/*    value={periodStart}*/}
      {/*    min={null}*/}
      {/*    max={null}*/}
      {/*    size={Size.MEDIUM}*/}
      {/*    placeholder="Pick a date"*/}
      {/*    label="Period start date"*/}
      {/*    monthFormat="long"*/}
      {/*    disabled={false}*/}
      {/*    onChange={(v) => setPeriodStart(v)}*/}
      {/*    clearable={false}*/}
      {/*/>*/}
      {/*<DateLookup*/}
      {/*    value={periodEnd}*/}
      {/*    min={null}*/}
      {/*    max={null}*/}
      {/*    size={Size.MEDIUM}*/}
      {/*    placeholder="Pick a date"*/}
      {/*    label="Period end date"*/}
      {/*    monthFormat="long"*/}
      {/*    disabled={false}*/}
      {/*    onChange={(v) => setPeriodEnd(v)}*/}
      {/*    clearable={false}*/}
      {/*/>*/}
      {/*<Select*/}
      {/*    size="md"*/}
      {/*    placeholder="Placeholder"*/}
      {/*    dropdownRight="xs"*/}
      {/*    dropdownWidth="lg"*/}
      {/*    inverse={false}*/}
      {/*    block*/}
      {/*    selected={ssource}*/}
      {/*    disabled={false}*/}
      {/*    onChange={(v) => setSsource(v)}*/}
      {/*    required={false}*/}
      {/*    searchPlaceholder="Find the source currency"*/}
      {/*    dropdownUp={false}*/}
      {/*    search*/}
      {/*    options={[*/}
      {/*        { header: 'Basic' },*/}
      {/*        { value: 0, label: 'EURO', currency: 'EUR' },*/}
      {/*        { value: 1, label: 'GBP', currency: 'GBP' },*/}
      {/*        { value: 2, label: 'HUF', currency: 'HUF' },*/}
      {/*        { value: 3, label: 'USD', currency: 'USD' },*/}
      {/*    ]}*/}
      {/*/>*/}
      {/*  todo ritkitani a pontokat*/}
      {/*  extrapolacio*/}
      {/*  vmi szinu vonal -> korabbi extrapolaciok sikeresseget*/}
      {/*  advance -> algoritmus alapjan valtozzon az extrapol*/}
      {/*  limit jelenjen meg egyenes vonalkent*/}
      {/*<Select*/}
      {/*    size="md"*/}
      {/*    placeholder="Placeholder"*/}
      {/*    dropdownRight="xs"*/}
      {/*    dropdownWidth="lg"*/}
      {/*    inverse={false}*/}
      {/*    block*/}
      {/*    selected={ttarget}*/}
      {/*    disabled={false}*/}
      {/*    onChange={(v) => setTtarget(v)}*/}
      {/*    required={false}*/}
      {/*    searchPlaceholder="Find the target currency"*/}
      {/*    dropdownUp={false}*/}
      {/*    search*/}
      {/*    options={[*/}
      {/*      { header: 'Basic' },*/}
      {/*      { value: 0, label: 'EURO', currency: 'EUR' },*/}
      {/*      { value: 1, label: 'GBP', currency: 'GBP' },*/}
      {/*      { value: 2, label: 'HUF', currency: 'HUF' },*/}
      {/*      { value: 3, label: 'USD', currency: 'USD' },*/}
      {/*    ]}*/}
      {/*/>*/}
      <Line data={data} options={options} height={500}/>
    </div>
  );
};

export default LineChart;
