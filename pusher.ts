import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1513465",
  key: "2b278b2911a8c544b2f9",
  secret: "6adc4cdd912056267d61",
  cluster: "ap1",
  useTLS: true,
});

export const clientPusher = new ClientPusher("2b278b2911a8c544b2f9", {
  cluster: "ap2",
  forceTLS: true,
});
