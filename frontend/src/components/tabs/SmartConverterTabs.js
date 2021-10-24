import './index.css';

import React from 'react';
import Form from './form/Form';
import {Tabs} from '@transferwise/components';
import Order from "../pages/Order";

const SmartConverterTabs = (props) => {
  const [open, setOpen] = React.useState(false);
  const { source, setSource, target, setTarget, dueDate, setDueDate, rate, setRate, calculation, setCalculation,
      riskLevel, setRiskLevel, refreshOrder, setRefreshOrder } = props;

  return (
    <div className="m-a-2">
      <Tabs
        className="tabs-custom-class"
        name="tabs-docs"
        tabs={[
          {
            title: 'Transfer',
            disabled: false,
            content: (
              <Form source={source} setSource={setSource}
                    target={target} setTarget={setTarget}
                    dueDate={dueDate} setDueDate={setDueDate}
                    calculation={calculation} setCalculation={setCalculation}
                    rate={rate} setRate={setRate}
                    refreshOrder={refreshOrder} setRefreshOrder={setRefreshOrder}
                    riskLevel={riskLevel} setRiskLevel={setRiskLevel}/>
            ),
          },
          {
            title: 'Recurring Payment',
            disabled: false,
            content: (
              <Form recurring={true}
                    source={source} setSource={setSource}
                    target={target} setTarget={setTarget}
                    dueDate={dueDate} setDueDate={setDueDate}
                    calculation={calculation} setCalculation={setCalculation}
                    rate={rate} setRate={setRate}
                    riskLevel={riskLevel} setRiskLevel={setRiskLevel}/>
            ),
          },
        ]}
        selected={open}
        onTabSelect={(index) => setOpen(index)}
      />
    </div>
  );
}

SmartConverterTabs.propTypes = {};

export default SmartConverterTabs;