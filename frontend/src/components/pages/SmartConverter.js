import React, {useState} from 'react';
import Navigation from '../navigation/Navigation';
import LineChart from '../charts/LineChart';
import SmartConverterTabs from '../tabs/SmartConverterTabs';
import Order from "./Order";
import {TimeWalking} from "../service/TimeWalking";
import {Modal} from "@transferwise/components";
import {Button} from "@transferwise/components";
import {Scroll} from "@transferwise/components";
import {Position} from "@transferwise/components";
import {Size} from "@transferwise/components";
import {Accordion} from "@transferwise/components";
import {Balance, New, MultiCurrency} from "@transferwise/icons";

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
  const [refreshOrder, setRefreshOrder] = useState(false);

  function timeWalking(source, target, amount) {
    setOpen(true);
    TimeWalking(source, target, amount);
    setRefreshOrder(!refreshOrder);
  }

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
        <div className="row grid__smart-converter">
          <Order refresh={refreshOrder}/>
        </div>
      </Navigation>
        <div
            className="demo-popup"
            id="demo-popup">

        </div>
        <class
            id="demo_button"
            className="demo_button">
          <Button
              onClick={
                () => timeWalking(source.currency, target.currency, calculation)
              }>
            Time Walking
          </Button>
          <Modal
              body={
                <>
                  <Accordion
                      indexOpen={1}
                      items={[
                          {
                              title: 'Dedacted amount: (You\'ll receive / tényleges váltási érékkel (mock nagyobbat))',
                              content: 'Expected rate: (value)' +
                                       'Rate by strategy: (value)',
                              icon: <MultiCurrency size={24} />,
                          },
                          {
                              title: 'Deducted if you exchange on the due date: (You\'ll receive / rateból generálok kissebbet)',
                              content: 'Due date rate: (value)' +
                                  'Rate by strategy: (value)',
                              icon: <MultiCurrency size={24} />,
                          },
                        {
                          title: 'Compare to the bank\'s exchange rates you have saved: You\'ll receive * 0.035 EUR',
                          content: 'The exchange rate at the bank is higher then the Wise prizes',
                          icon: <MultiCurrency size={24} />,
                        },
                        {
                          title: 'Today date is: due-date',
                          content: <span>This is just for demo purposes</span>,
                          icon: <Balance size={24} />,
                        },
                      ]}
                  />
                </>
              }
              open={open}
              scroll={Scroll.CONTENT}
              position={Position.TOP}
              onClose={() => setOpen(false)}
              size={Size.MEDIUM}
              title="Successful time traveling - demo"
              className=""
          />
        </class>
    </div>
  );
};

SmartConverter.propTypes = {};

export default SmartConverter;