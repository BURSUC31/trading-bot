const Operation = require("./buyAndSell");
const Counterapp = require("./counterapp");

async function start() {
  let oldPrice;
  let trashHoldPrice;
  const procent = 5.025;
  let counter = 1;

  const operation = new Operation();
  const counterapp = new Counterapp();

  await counterapp.setToken();
  await operation.setSession();

  const bla = setInterval(async () => {
    let interval = 2000;
    let sleepCondition;

    try {
      let price = await counterapp.lastTradePrice();
      if (oldPrice === undefined) {
        oldPrice = price;
      }
      trashHoldPrice = percentage(price, procent);

      const { maxSellQuantity, maxBuy } = await operation.getMaxValues();
      if (trashHoldPrice >= oldPrice) {
        oldPrice = price;

        console.log("buy", counter);

        console.log(trashHoldPrice, oldPrice, counter++);

        if (maxBuy > 0) {
          // await operation.buyStock(maxBuy);
        }
        //case buy or keep
      }

      if (trashHoldPrice < oldPrice) {
        oldPrice = price;

        console.log(trashHoldPrice, oldPrice, counter++);
        console.log("sell");
        if (maxSellQuantity > 0) {
          // await operation.sellStock(-maxSellQuantity);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, 500);
  console.log("asdasdas");
}

start();

function percentage(num, per) {
  return Number(num) + Number((num / 100) * per);
}

const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 3000));
};
