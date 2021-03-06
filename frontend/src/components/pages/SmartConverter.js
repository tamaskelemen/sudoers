import React, {useEffect, useState} from 'react';
import Navigation from '../navigation/Navigation';
import LineChart from '../charts/LineChart';
import SmartConverterTabs from '../tabs/SmartConverterTabs';
import {useParams} from 'react-router-dom';
import currencies from '../tabs/form/currencies';
import {Alert, Sentiment} from '@transferwise/components';
import Order from './Order';
import Tutorial from '../tutorial/Tutorial';

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
  const [calculation, setCalculation] = useState({
    sourceAmount: 0,
    cost: 0,
    weConvert: 0,
    targetAmount: 0
  });
  const [riskLevel, setRiskLevel] = useState({ value: 'low', label: 'Low risk' });
  const [refreshOrder, setRefreshOrder] = useState(false);

  let { source: sourceFromPath } = useParams();

  useEffect(() => {
    setSource(currencies.find(currency => currency.value === sourceFromPath))
  }, [])

  return (
    <div>
      <Navigation>
        <Tutorial/>
        <div className="row">
          <div className="col-sm-8">
            <LineChart source={source} setSource={setSource}
                       target={target} setTarget={setTarget}
                       dueDate={dueDate} setDueDate={setDueDate}
                       calculation={calculation} setCalculation={setCalculation}
                       rate={rate} setRate={setRate}
                       riskLevel={riskLevel} setRiskLevel={setRiskLevel}
            />
            <div className="m-a-3">
              <Alert
                message="The yellow dotted line is a predicted value by an algorithm. Our science team created these predictions, but the market can be different from it."
                type={Sentiment.WARNING}
              />
            </div>
          </div>
          <div className="col-sm-4" style={{ zIndex: 1 }}>
            <SmartConverterTabs source={source} setSource={setSource}
                                target={target} setTarget={setTarget}
                                dueDate={dueDate} setDueDate={setDueDate}
                                calculation={calculation} setCalculation={setCalculation}
                                rate={rate} setRate={setRate}
                                refreshOrder={refreshOrder} setRefreshOrder={setRefreshOrder}
                                riskLevel={riskLevel} setRiskLevel={setRiskLevel}/>
          </div>
          <div className="col-xs-12">
            <div className="row grid__smart-converter">
              <Order refreshOrder={refreshOrder}/>
            </div>
          </div>
        </div>
      </Navigation>
    </div>
  );
};

SmartConverter.propTypes = {};

export default SmartConverter;