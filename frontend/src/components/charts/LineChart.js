import React, {useEffect, useRef, useState} from 'react';
import { Line } from 'react-chartjs-2';
import {chart} from '../../client/api';

const LineChart = () => {
  const [datapoints, setDatapoints] = useState();

  useEffect(() => {
    chart('2021-05-01', '2021-08-01', 'HUF', 'USD')
      .then(response => {
        setDatapoints(convertResponseToData(response))
      })
  }, [])

  const convertResponseToData = (response) => {
    return response.data.map(entry => ({x: entry.date, y: entry.rate}))
  }

  const data = {
    datasets: [
      {
        label: 'Cubic interpolation (monotone)',
        data: datapoints,
        borderColor: 'red',
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.4
      }
    ]
  };

  const options = {
    type: 'line',
    data: data,
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
      plugins: {
        legend: {
          display: false
        }
      },
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
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
