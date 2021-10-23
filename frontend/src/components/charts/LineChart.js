import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import { format } from "date-fns";
import {chart} from '../../client/api';
import {convertDateToString} from '../../utils';
import {DateLookup, Select, Size} from '@transferwise/components';
import step from 'everpolate';

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
          // let copy = result.map(entry => {entry.x});
          let res = result.map(item => item.x = new Date(item.x).getTime());
          let last = res[res.length - 1 ];
          let newElements = [];
          for (let i = 0; i < 10; i++) {
            last = last + 86400000;

            newElements.push(last);
          }
          console.log(newElements)
          // newElements.forEach(item => {
          //   result.push({x: format(new Date(item), 'yyyy-MM-dd'), y: step(item, res, result.map(item => item.y))})
          // })
          // let step = step(newElements[1], res, result.map(item => item.y));
          console.log();
          setDatapoints(result);
        });
    }
  }, [periodStart, periodEnd, source, target]);

  const convertResponseToData = (response) => {
    return (response.data || []).map(entry => ({ x: entry.date, y: entry.rate }));
  }

  const data = {
    datasets: [
      {
        label: 'Cubic interpolation (monotone)',
        data: datapoints,
        borderColor: '#00b9ff',
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.8,
      }
    ]
  };

  const options = {
    type: 'line',
    data: data,
    plugins: {
      legend: {
        display: false,
        tooltip: true,
      }
    },
    options: {
      // animations: {
      //   tension: {
      //     duration: 1000,
      //     easing: 'linear',
      //     from: 1,
      //     to: 0,
      //     loop: true
      //   }
      // },
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          type: 'time',
          display: true,
          title: {
            display: true
          },
          // time: {
          //   unit: 'day'
          // }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value'
          },
        }
      }
    },
  };

  return (
    <div>
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
      <Line data={data} options={options} height={300}/>
    </div>
  );
};

export default LineChart;
