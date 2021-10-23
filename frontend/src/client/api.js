const axios = require('axios');
const querystring = require('querystring');
var baseUrl = "http://localhost:8080/api/rates?";


const chart = function (from, to, source, target) {

    var params = {
        "from": from,
        "to": to,
        "source": source,
        "target": target,
    }

    let queryString = querystring.stringify(params);
    console.log(queryString);

    const response = axios.get(baseUrl + queryString)
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
