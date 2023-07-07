const WebSocketClient = require("websocket").client;
let getSession = require("./getSession");

const subscribeToStock = (CONNECTION) => {
  if (CONNECTION.connected) {
    CONNECTION.send('42["subscribe","/TN",["AAPL_US_EQ"]]');
  }
};

async function asyncBloc(params) {
  const client = new WebSocketClient();
  const { data } = await getSession();
  let TRADING212_SESSION_LIVE = data.accountSession;
  console.log(TRADING212_SESSION_LIVE);

  client.on("connectFailed", (error) => {
    console.log("Connect Error: " + error.toString());
  });

  client.on("connect", (connection) => {
    console.log("WebSocket Client Connected");
    connection.on("error", (error) => {
      console.log("Connection Error: " + error.toString());
      process.exit(0);
    });
    connection.on("close", () => {
      console.log("echo-protocol Connection Closed");
    });
    connection.on("message", (message) => {
      if (message.type === "utf8") {
        console.log("Received: '" + message.utf8Data + "'");
      }
    });
    connection.send('42["subscribe","/TN",["AAPL_US_EQ"]]');
  });

  client.connect(
    "wss://live.trading212.com/streaming/events/?app=WC4&appVersion=2.2.55&EIO=3&transport=websocket",
    null,
    null,
    {
      Cookie: `TRADING212_SESSION_LIVE=${TRADING212_SESSION_LIVE};`,
    }
  );
}

asyncBloc();
