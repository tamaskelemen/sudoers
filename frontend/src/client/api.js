const axios = require('axios');
const querystring = require('querystring');
var baseUrl = "http://junction-sudoers.hu";
//var baseUrl = "http://localhost:8080";

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

export const orderList = function() {
    let uri = "/api/order/list";
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

export const conversion = function (borderlessAccountId, quoteId) {
    let uri = "/api/borderless-accounts/";
    return axios.post(baseUrl + uri + borderlessAccountId, {
        quoteId: quoteId
    });
}

export const createQuote = function(sourceCurrency, targetCurrency, sourceAmount, profile) {
    let uri = "/api/payment/quote";
    return axios.post(baseUrl + uri, {
        sourceCurrency,
        targetCurrency,
        sourceAmount,
        profile,
        payOut: 'BALANCE',
    });
}

export const setOrderStatus = function(id, status) {
    let uri = "/api/order/status";

    return axios.post(baseUrl + uri, {
        "order_id": id,
        status
    });
}
