const axios = require("axios");
const getCounterToken = require("./getCounterToken");

class Counterapp {
  async setToken() {
    if (!this.counterToken) {
      this.counterToken = await getCounterToken();
      console.log(this.counterToken, "auauauauua");
    }
  }

  async getApple() {
    const config = {
      method: "get",
      url: "https://production.api.coindesk.com/v2/tb/price/ticker?assets=ETH",
      // headers: {
      //   Authorization: this.counterToken,
      // },
    };
    return await axios(config);
  }

  async lastTradePrice() {
    const rawData = await this.getApple();

    return { data: rawData.data.data.BTC.ohlc };
  }
}

module.exports = Counterapp;
