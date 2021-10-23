import {LinearRegression} from 'js-regression';
import { format } from "date-fns";
import step from 'everpolate';

export default function (props) {
    let res = new Array(...props.result);
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

    const multipliedExchangeRates = props.result.map(item => {return item.y * 1000000;});
    const yValues = step(nextDaysIndexes, dayIndexes,
        multipliedExchangeRates);
    debugger
    const newEstimatedValues = [];
    for (let i = 0; i < 10; i++) {
        newEstimatedValues.push({x: format(new Date(newElements[i]), 'yyyy-MM-dd')
            , y: yValues[i] / 1000000})
    }

    return [...props.result, ...newEstimatedValues];
}