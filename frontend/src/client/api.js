const axios = require('axios');
const querystring = require('querystring');
const repository = require("./repository")
var baseUrl = "http://localhost:8080";


/**
 * Return the chart data as array.
*/
const chart =  (from, to, source, target) => {

    var params = {
        "from": from,
        "to": to,
        "source": source,
        "target": target,
    }

    let queryString = querystring.stringify(params);
    console.log(queryString);

    const response = axios.get(baseUrl + "/api/rates?" + queryString)
        .then(function (response) {
            // handle success
            console.log(response);
            return response;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            return [];
          });

};

const setOrder = function(from, to, source, target, threshold, amount) {
    var params = {
        "from": from,
        "to": to,
        "source": source,
        "target": target,
        "amount": amount,
        "threshold": threshold
    }

    axios.post(baseUrl + "/api/order/create", params)
         .then(function (response) {
               // handle success
               console.log(response);
               return response;
             })
             .catch(function (error) {
               // handle error
               console.log(error);
               return [];
         });
};

//Returns how much you get by using tw
const disclaimer = function(source, target, amount) {
    var params = {
        "sourceCurrency": source,
        "targetCurrency": target,
        "sendAmount": amount
    }

    let queryString = querystring.stringify(params);
    console.log(queryString);
    axios.get(baseUrl + "/api/comparison/disclaimer?" + queryString)
             .then(function (response) {
                   // handle success
                   console.log(response);
                   return response;
                 })
                 .catch(function (error) {
                   // handle error
                   console.log(error);
                   return [];
             });
}

chart("2017-10-01", "2018-11-01", "AED", "USD");
setOrder("2017-10-01", "2018-11-01", "AED", "USD", 10, 1555);
disclaimer("USD", "HUF", 10000);

payments.fund();