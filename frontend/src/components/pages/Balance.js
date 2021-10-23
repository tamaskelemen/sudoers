import React from "react";
import Navigation from '../navigation/BalanceNavigation';
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

function Balance() {
    let { balance_id } = useParams();
    return (
        <div>
            <Navigation>
                Balance
            </Navigation>
        </div>
    );
}

Balance.propTypes = {};

export default Balance;
