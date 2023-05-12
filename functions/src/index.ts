import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import {routes} from "./routes";

admin.initializeApp();

exports.register_realtime_update = functions
  .database
  .ref("/readings/dht11/{pushId}")
  .onCreate(async (snapshot) => {
    const reading = snapshot.val();
    const updatedAt = Date.now();
    const date = new Date(updatedAt)
      .toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});

    const climate = {...reading, updatedAt, date};
    // await saveClimate(climate);

    return snapshot.ref.root
      .child(`data/${reading.roomId}`)
      .set(climate);
  });


const app = express();
app.use(bodyParser.json());
app.use(cors({origin: true}));
routes(app);

export const api = functions.https.onRequest(app);
