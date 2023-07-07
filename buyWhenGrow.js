const Operation = require("./buyAndSell");
const Counterapp = require("./counterapp");

async function start() {
  let oldPrice;
  let trashBuyHoldPrice;
  let trashSellHoldPrice;
  const procent = 1.025;
  let counter = 10;

  const operation = new Operation();
  const counterapp = new Counterapp();

  await counterapp.setToken();
  // await operation.setSession();

  const bla = async () => {
    console.log("blaaa");
    try {
      let price = await counterapp.lastTradePrice();
      if (oldPrice === undefined) {
        oldPrice = price;
      }
      trashBuyHoldPrice = percentage(oldPrice, 1);
      trashSellHoldPrice = percentage(oldPrice, 0.2);

      // const { maxSellQuantity, maxBuy } = await operation.getMaxValues();

      console.log(
        // trashBuyHoldPrice,
        oldPrice,
        counter++
        // maxBuy,
        // trashBuyHoldPrice - price
      );
      if (price > trashBuyHoldPrice) {
        oldPrice = price;

        console.log("buy", counter);

        if (maxBuy > 0) {
          await operation.buyStock(maxBuy);
        }
      }

      if (price < trashSellHoldPrice) {
        oldPrice = price;

        // if (maxSellQuantity > 0) {
        //   // await operation.sellStock(-maxSellQuantity);
        // }
      }
      oldPrice = price;
    } catch (error) {
      console.log(error);
      // await counterapp.setToken();
      // await operation.setSession();
      await sleep(400);
    }
  };

  while (true) {
    console.log("nimic");
    await sleep(100);
    await bla();
  }
}

start();

function percentage(num, per) {
  return Number(num) + Number((num / 100) * per);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
