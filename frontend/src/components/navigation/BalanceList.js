import React from "react";
import * as api from "../../client/api";

function BalanceList() {
  let [balances, setBalances] = React.useState([]);

  React.useEffect(function() {

      api.balances(16297127).then(function(response) {
        setBalances(response.data[0].balances)
      });

  }, []);

    return (
        <ul>
            { balances.map(data => {
             let avatar = "https://wise.com/public-resources/assets/flags/square/" + data.currency.toLowerCase() + ".svg";
             let amount = data.amount.value + " " + data.amount.currency;
             let url = "/#/user/account/balances/" + data.id + "/";

             return (<li>
              <div className="balance-item active"><a href={url}>
                <div className="avatar-container" aria-hidden="true">
                  <div className="balance-avatar balance-avatar--sm balance-avatar--dark">
                    <div
                      className="tw-avatar tw-avatar--sm tw-avatar--thumbnail tw-avatar--dark">
                      <div className="tw-avatar__content"
                           style={{backgroundColor: 'transparent'}}><img
                        className="balance-avatar__round-currency-icon"
                        src={avatar} alt=""/></div>
                    </div>
                  </div>
                </div>
                <span className="balance-item__balance-details">{amount}</span></a></div>
            </li>);
          })
        }
        </ul>
    );
}

BalanceList.propTypes = {};

export default BalanceList;
