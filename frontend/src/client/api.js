const axios = require('axios');
const querystring = require('querystring');
var baseUrl = "http://localhost:8080";

/**
 * Return the chart data as array.
*/
export const chart = (from, to, source, target) => {

    var params = {
        "from": from,
        "to": to,
        "source": source,
        "target": target,
    }

    let queryString = querystring.stringify(params);

    return axios.get(baseUrl + "/api/rates?" + queryString)
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

export const setOrder = function(from, to, source, target, threshold, amount) {
    var params = {
        "from": from,
        "to": to,
        "source": source,
        "target": target,
        "amount": amount,
        "threshold": threshold
    }

    return axios.post(baseUrl + "/api/order/create", params)
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
export const disclaimer = function(source, target, amount) {
    var params = {
        "sourceCurrency": source,
        "targetCurrency": target,
        "sendAmount": amount
    }

    let queryString = querystring.stringify(params);

    return axios.get(baseUrl + "/api/comparison/disclaimer?" + queryString)
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

export const balances = function(profile_id) {
    let uri = "/api/borderless-accounts/profiles/" + profile_id;

    return axios.get(baseUrl+ uri)
        .then(function (response) {
            console.log(response)
            return response;
        })
        .catch(function (error) {
            console.log(error)
            return;
        })
}

