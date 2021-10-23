import React, {PureComponent} from 'react';
import {Button, Checkbox, ControlType, DateLookup, MoneyInput, RadioGroup, Size} from '@transferwise/components';
import Steps from '../steps/Steps';
import {setOrder} from '../../../client/api';
import {convertDateToString} from '../../../utils';
import currencies from './currencies';

class Form extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      source: {
        value: 'USD',
        label: 'USD',
        note: 'US Dollar',
        currency: 'usd',
        searchable: 'USA',
      },
      target: {
        value: 'EUR',
        label: 'EUR',
        note: 'Euro',
        currency: 'eur',
        searchable: 'Spain, Germany, France, Austria',
      },
      limit: '',
      amount: 1000,
      smartConversion: true,
      dueDate: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeTargetCurrency = this.changeTargetCurrency.bind(this);
    this.changeLimit = this.changeLimit.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.setCheck = this.setCheck.bind(this);
    this.setDoDate = this.setDoDate.bind(this);
  }

  handleSubmit() {
    const { dueDate, source, target, amount, limit, smartConversion } = this.state;

    const dueDateString = convertDateToString(dueDate)

    setOrder('2021-10-24', dueDateString, source.currency, target.currency, smartConversion ? null : parseFloat(limit), amount)
      .then(console.log);
  }

  setCheck(event) {
    this.setState({ smartConversion: !this.state.smartConversion });
  }

  changeTargetCurrency(event) {
    this.props.setTarget(event);
  }

  changeLimit(event) {
    this.setState({ limit: event.target.value });
  }

  setDoDate(event) {
    this.props.setDueDate(event);
  }

  changeAmount(event) {
    this.setState({ amount: event });
  }

  render() {
    const { source, setSource, target, setTarget, dueDate, setDueDate, rate, setRate } = this.props;
    const { recurring } = this.props;
    const { smartConversion, limit, amount } = this.state;

    return (
      <div className="m-a-2">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="money-input">You'll convert</label>
            <MoneyInput
              id="money-input"
              amount={1000}
              size="lg"
              onAmountChange={value => console.log('amount changed', value)}
              onCurrencyChange={() => alert('currency changed')}
              addon={null}
              searchPlaceholder="Type a currency or country"
              onCustomAction={() => alert('Custom action')}
              customActionLabel="Custom action label"
              currencies={[
                {
                  header: 'Popular currencies',
                },{
                  value: 'USD',
                  label: 'USD',
                  note: 'US Dollar',
                  currency: 'usd',
                  searchable: 'USA',
                },
                {
                  value: 'EUR',
                  label: 'EUR',
                  note: 'Euro',
                  currency: 'eur',
                  searchable: 'Spain, Germany, France, Austria',
                },
                {
                  value: 'GBP',
                  label: 'GBP',
                  note: 'British pound',
                  currency: 'gbp',
                  searchable: 'England, Scotland, Wales',
                },
              ]}
              selectedCurrency={source}
            />
          </div>

          <div className="form-group">
            <label className="control-label d-inline" htmlFor="90007848">Convert by</label>
            <DateLookup
              value={dueDate}
              min={null}
              max={null}
              size={Size.MEDIUM}
              placeholder="Pick a date"
              monthFormat="long"
              disabled={false}
              onChange={this.setDoDate}
              clearable={false}
            />
          </div>

          {
            recurring && (
              <>
                <div className="m-b-2">
                  <RadioGroup
                    selectedValue="radio-2"
                    name="radio-group"
                    onChange={(v) => console.log(v)}
                    radios={[
                      {
                        value: 'radio-2',
                        label: 'Weekly',
                        disabled: false,
                      },
                      {
                        value: 'radio-1',
                        label: 'Monthly',
                        disabled: false,
                      },
                    ]}
                  />
                </div>

                <Checkbox
                  label="Indefinite"
                  onChange={this.setCheck}
                  checked={this.state.smartConversion}
                  disabled={false}
                />

                {/*<div className="form-group">*/}
                {/*  <label className="control-label d-inline" htmlFor="90007848">Convert by</label>*/}
                {/*  <DateLookup*/}
                {/*    value={this.state.doDate}*/}
                {/*    min={null}*/}
                {/*    max={null}*/}
                {/*    size={Size.MEDIUM}*/}
                {/*    placeholder="Pick a date"*/}
                {/*    monthFormat="long"*/}
                {/*    disabled={false}*/}
                {/*    onChange={this.setDoDate}*/}
                {/*    clearable={false}*/}
                {/*  />*/}
                {/*</div>*/}
              </>
            )
          }

          <Checkbox
            label="Smart conversion"
            onChange={this.setCheck}
            checked={this.state.smartConversion}
            disabled={false}
          />

          {
            !smartConversion && (
              <div className="form-group m-t-2">
                <label className="control-label d-inline" htmlFor="90007848">Conversion price</label>
                <input type="number" className="form-control" value={this.state.limit} onChange={this.changeLimit}/>
              </div>
            )
          }

          <Steps/>

          {/*<label id="labelID" htmlFor="switchId">*/}
          {/*  Use limit mode:*/}
          {/*</label>*/}
          {/*<Switch*/}
          {/*  checked={this.state.checked}*/}
          {/*  className="a-class-name"*/}
          {/*  onClick={this.setCheck}*/}
          {/*  aria-labelledby="labelID"*/}
          {/*  id="switchId"*/}
          {/*/>*/}

          {/*todo szovegek*/}
          {/*<Accordion*/}
          {/*  indexOpen={1}*/}
          {/*  items={[*/}
          {/*    {*/}
          {/*      title: 'Advanced',*/}
          {/*      content: 'I can be text',*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*/>*/}

          <div className="form-group">
            <label htmlFor="money-input">You'll receive</label>
            <MoneyInput
              id="money-input"
              amount={amount}
              size="lg"
              onAmountChange={this.changeAmount}
              onCurrencyChange={this.changeTargetCurrency}
              addon={null}
              searchPlaceholder="Type a currency or country"
              // onCustomAction={() => alert('Custom action')}
              // customActionLabel="Custom action label"
              currencies={currencies}
              selectedCurrency={target}
            />
          </div>

          <Button size={Size.MEDIUM} type={ControlType.POSITIVE} block onClick={this.handleSubmit}>
            Continue
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;