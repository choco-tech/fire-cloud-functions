import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.register_realtime_update = functions.database
  .ref("/readings/dht11/{pushId}")
  .onCreate((snapshot, _) => {
    const reading = snapshot.val();
    const updatedAt = Date.now();
    const date = new Date(updatedAt)
      .toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});

    return snapshot.ref.root
      .child(`data/${reading.room_id}`)
      .set({...reading, updatedAt, date});
  });
