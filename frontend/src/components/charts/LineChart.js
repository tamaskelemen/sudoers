import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {format} from 'date-fns';
import {chart} from '../../client/api';
import {convertDateToString} from '../../utils';
import 'chartjs-adapter-date-fns';
import {DateLookup, Select, Size} from '@transferwise/components';
import { LinearRegression } from 'js-regression';
import step from 'everpolate';
import Regression from "./Regression";

const LineChart = (props) => {
  const { source, setSource, target, setTarget, dueDate, setDueDate, rate, setRate } = props;

  useEffect(() => {
    chart('2021-05-01', convertDateToString(dueDate || new Date()), source.value, target.value)
      .then(response => {
        setDatapoints(convertResponseToData(response))
      })
  }, [source, target, dueDate])

  const [datapoints, setDatapoints] = useState([]);
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
      if (periodStart != null && periodEnd != null && (source.currency !== "" &&
          source.currency !== undefined) && (target.currency !== "" && target.currency !== undefined)) {
          const formattedPeriodStart = format(periodStart, "yyyy-MM-dd")
          const formattedPeriodEnd = format(periodEnd, "yyyy-MM-dd")
          chart(formattedPeriodStart, formattedPeriodEnd, source.currency, target.currency)
            .then(response => {
                let result = convertResponseToData(response);
                let res = new Array(...result);
                const timestamps = res.map(item => new Date(item.x).getTime());

                let last = timestamps[timestamps.length - 1 ];
                let newElements = [];
                for (let i = 0; i < 10; i++) {
                    last = last + 86400000;
                    newElements.push(last);
                }

                let lastIndex = timestamps.length;
                const nextDaysIndexes = [];
                for (let i = 0; i < 10; i++) {
                    nextDaysIndexes.push(lastIndex++);
                }
                // const yValue = linear(nextDaysIndexes, timestamps, result.map(item => item.y));
                let dayIndexes = Array.from(Array(timestamps.length)
                    .keys());

                var regression = new LinearRegression({
                    alpha: 0.001, //
                    iterations: 300,
                    lambda: 0.0
                });

                const multipliedExchangeRates = result.map(item => {return item.y * 1000000;});
                // const model = step(nextDaysIndexes, dayIndexes,
                //     multipliedExchangeRates);
                const coordinates = []
                for (let i = 0; i < multipliedExchangeRates.length; i++) {
                    coordinates.push([dayIndexes[i], multipliedExchangeRates[i]]);
                }

                const model = regression.fit(coordinates);
                const predicted = [];
                for(var x = 0; x < nextDaysIndexes.length; x += 1.0) {
                    var predicted_y = regression.transform([nextDaysIndexes[x]]);
                    predicted.push(predicted_y);
                }

                debugger
                const newEstimatedValues = [];
                for (let i = 0; i < 10; i++) {
                    newEstimatedValues.push({x: format(new Date(newElements[i]), 'yyyy-MM-dd')
                    , y: predicted[i] / 1000000})
                }

                const dataPointsArray = [...result, ...newEstimatedValues];
                Regression({result});
                // setDatapoints(dataPointsArray);
          });
      }
  }, [periodStart, periodEnd, source, target]);

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
