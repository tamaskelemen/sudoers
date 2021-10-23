import React, {useState} from 'react';
import Navigation from '../navigation/Navigation';
import LineChart from '../charts/LineChart';
import SmartConverterTabs from '../tabs/SmartConverterTabs';
import Order from "./Order";

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

  return (
    <div>
      <Navigation>
        <div className="row">
          <div className="col-sm-8">
            <LineChart source={source} setSource={setSource}
                       target={target} setTarget={setTarget}
                       dueDate={dueDate} setDueDate={setDueDate}
                       rate={rate} setRate={setRate} />
          </div>
          <div className="col-sm-4">
            <SmartConverterTabs source={source} setSource={setSource}
                                target={target} setTarget={setTarget}
                                dueDate={dueDate} setDueDate={setDueDate}
                                rate={rate} setRate={setRate}/>
          </div>
        </div>
        <div className="row">
          <Order />
        </div>
      </Navigation>
    </div>
  );
};

SmartConverter.propTypes = {};

export default SmartConverter;