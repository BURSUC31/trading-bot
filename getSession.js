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
    Cookie:
      "_rdt_uuid=1669314385729.0ef9baae-d6e2-4cac-bcc2-c90eb6c3a493; _ga_G312YS79JS=GS1.1.1673129206.44.1.1673130978.24.0.0; _ga=GA1.1.1922100141.1669314386; _gcl_aw=GCL.1670177568.CjwKCAiAp7GcBhA0EiwA9U0mtlKHd6LurENjtVTTMzmS2eadIWj1lZIKQUSETiO4uP2PU0zgyu5FCRoCQeAQAvD_BwE; _gcl_au=1.1.56547369.1669314388; 5d60904a5b52802c63d8b5b97bf8a1ea=%22d66e2d2b-289b-4009-a6de-e7cfa82573df%22; COOKIES_CONSENT=all; PLATFORM_LOADED_212=eyJ0b211bGVzZWlkaW1pdHJpZUBnbWFpbC5jb20iOiJSRUFMIn0%3D; PLATFORM_LANG=ZW4%3D; LOADING_TEXT_REAL=UmVhbCBtb25leQ%3D%3D; LOADING_TEXT_DEMO=UHJhY3RpY2U%3D; amp_795329=d66e2d2b-289b-4009-a6de-e7cfa82573df.OThiYjk4NTMtM2Q1Yy00YzhkLWI0MTYtNGVjMDNkN2IyYjBl..1gm74b8er.1gm763163.3u.1j5.1n3; _tt_enable_cookie=1; _ttp=c2216f05-a627-41ff-9210-5c93321aace5; LOGIN_TOKEN=eyJ0b2tlbiI6IjU0ZGI3OGNlLWNhMDAtNGJiNi1hMGZhLTY5MTQzNGU5OTUwOSJ9; TRADING212_SESSION_LIVE=72322f0a-bfdf-4533-a214-1ceda551fa08",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    TE: "trailers",
  },
  data: data,
};

module.exports = async () => axios(config);
