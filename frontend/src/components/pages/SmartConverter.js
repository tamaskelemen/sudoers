import React, {useEffect, useState} from 'react';
import Navigation from '../navigation/Navigation';
import LineChart from '../charts/LineChart';
import SmartConverterTabs from '../tabs/SmartConverterTabs';
import Order from "./Order";
import {useParams} from 'react-router-dom';
import currencies from '../tabs/form/currencies';

const SmartConverter = () => {
  const [open, setOpen] = React.useState(false);
  const [source, setSource] = React.useState({
    value: 'USD',
    label: 'USD',
    note: 'US Dollar',
    currency: 'usd',
    searchable: 'USA',
  });
  const [target, setTarget] = React.useState({
    value: 'EUR',
    label: 'EUR',
    note: 'Euro',
    currency: 'eur',
    searchable: 'Spain, Germany, France, Austria',
  });
  const [dueDate, setDueDate] = useState();
  const [rate, setRate] = useState();
  const [calculation, setCalculation] = useState();
  const [riskLevel, setRiskLevel] = useState({ value: 'low', label: 'Low risk' });
  const [refreshOrder, setRefreshOrder] = useState(false);

  let { source: sourceFromPath } = useParams();

  useEffect(() => {
    setSource(currencies.find(currency => currency.value === sourceFromPath))
  }, [])

  function timeWalking(source, target, amount) {
    setOpen(true);
    TimeWalking(source, target, amount)
        .then(() => {
            setRefreshOrder(!refreshOrder);
        })
  }

  return (
    <div>
      <Navigation>
        <div className="row">
          <div className="col-sm-8">
            <LineChart source={source} setSource={setSource}
                       target={target} setTarget={setTarget}
                       dueDate={dueDate} setDueDate={setDueDate}
                       calculation={calculation} setCalculation={setCalculation}
                       rate={rate} setRate={setRate}
                       riskLevel={riskLevel} setRiskLevel={setRiskLevel}
                />
          </div>
          <div className="col-sm-4">
            <SmartConverterTabs source={source} setSource={setSource}
                                target={target} setTarget={setTarget}
                                dueDate={dueDate} setDueDate={setDueDate}
                                calculation={calculation} setCalculation={setCalculation}
                                rate={rate} setRate={setRate}
                                riskLevel={riskLevel} setRiskLevel={setRiskLevel}/>
          </div>
        </div>
        <div className="row grid__smart-converter">
          <Order />
        </div>
      </Navigation>
    </div>
  );
};

SmartConverter.propTypes = {};

export default SmartConverter;