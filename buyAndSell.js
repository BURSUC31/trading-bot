var axios = require("axios");
const getSession = require("./getSession");

class Operation {
  async setSession() {
    const { data } = await getSession();
    this.TRADING212_SESSION_LIVE = data.accountSession;
  }
  async buyStock(amount) {
    var data = {
      instrumentCode: "EBET_US_EQ",
      orderType: "MARKET",
      value: amount,
    };
    console.log(this.TRADING212_SESSION_LIVE);
    var config = {
      method: "post",
      url: "https://live.trading212.com/rest/v1/equity/value-order",
      headers: {
        Cookie: `TRADING212_SESSION_LIVE=${this.TRADING212_SESSION_LIVE};`,
      },
      data: data,
    };

    await axios(config);
  }

  async sellStock(amount) {
    var data = {
      instrumentCode: "EBET_US_EQ",
      orderType: "MARKET",
      quantity: amount,
    };
    // console.log(this.TRADING212_SESSION_LIVE);
    var config = {
      method: "post",
      url: "https://live.trading212.com/rest/public/v2/equity/order",
      headers: {
        Cookie: `TRADING212_SESSION_LIVE=${this.TRADING212_SESSION_LIVE};`,
      },
      data: data,
    };

    await axios(config);
  }

  async getMaxValues() {
    var config = {
      method: "get",
      url: "https://live.trading212.com/rest/v1/equity/value-order/min-max?instrumentCode=EBET_US_EQ",
      headers: {
        Cookie: `TRADING212_SESSION_LIVE=${this.TRADING212_SESSION_LIVE};`,
      },
    };
    const result = await axios(config);
    return result.data;
  }
}

module.exports = Operation;
