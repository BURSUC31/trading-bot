var axios = require("axios");
var data =
  '{"username":"blabla@gmail.com","password":"blaasdasd","rememberMe":true}';

var config = {
  method: "post",
  url: "https://www.trading212.com/api/authentication/login",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/json;charset=utf-8",
    demo: "eyJzZWN1cml0eUtleSI6ImRlbW8iLCJzZWN1cml0eUhhc2giOiI1ZTlkYWY3ZjdkYzNhZjE4ZTUyODQzMzE2ZDUxNzI3YiJ9",
    device: "Firefox",
    Origin: "https://www.trading212.com",
    DNT: "1",
    Connection: "keep-alive",
    Referer: "https://www.trading212.com/",

    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    TE: "trailers",
  },
  data: data,
};

module.exports = async () => axios(config);
