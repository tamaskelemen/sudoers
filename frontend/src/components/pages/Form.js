import {PureComponent} from "react";
import React from "react";
import {Accordion, DateLookup, MoneyInput, Size, Switch} from "@transferwise/components";

class Form extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            target: '',
            limit: '',
            amount: '',
            checked: true,
            doDate: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTargetCurrency = this.changeTargetCurrency.bind(this);
        this.changeLimit = this.changeLimit.bind(this);
        this.changeAmount = this.changeAmount.bind(this);
        this.setCheck = this.setCheck.bind(this);
        this.setDoDate = this.setDoDate.bind(this);
    }

    handleSubmit() {
    }

    setCheck(event) {
        this.setState({checked: !this.state.checked});
    }

    changeTargetCurrency(event) {
        this.setState({target: event.target.value})
    }

    changeLimit(event) {
        this.setState({limit: event.target.value});
    }

    setDoDate(event) {
        console.log(event);
        this.setState({doDate: event});
    }

    changeAmount(event) {
        this.setState({amount: event.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Target currency:
                    </label>
                    <input type="text" value={this.state.target} onChange={this.changeTargetCurrency} />
                    <label>
                        Amount:
                    </label>
                    <input type="text" value={this.state.amount} onChange={this.changeAmount}/>
                    <label>
                        Limit:
                    </label>
                    <input type="text" value={this.state.limit} onChange={this.changeLimit} />

                    <label id="labelID" htmlFor="switchId">
                        Use limit mode:
                    </label>
                    <Switch
                        checked={this.state.checked}
                        className="a-class-name"
                        onClick={this.setCheck}
                        aria-labelledby="labelID"
                        id="switchId"
                    />
                    <DateLookup
                        value={this.state.doDate}
                        min={null}
                        max={null}
                        size={Size.MEDIUM}
                        placeholder="Pick a date"
                        label="Pick a start date"
                        monthFormat="long"
                        disabled={false}
                        onChange={this.setDoDate}
                        clearable={false}
                    />

                    {/*todo szovegek*/}
                    <Accordion
                        indexOpen={1}
                        items={[
                            {
                                title: 'Advanced',
                                content: 'I can be text',
                            },
                        ]}
                    />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;