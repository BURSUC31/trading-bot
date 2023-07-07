const axios = require("axios");
module.exports = async () => {
  const res = await axios.get("https://robinhood.com/stocks/AAPL/");
  return "Bearer " + res.headers["set-cookie"][0].split("; ")[0].split("=")[1];
};
