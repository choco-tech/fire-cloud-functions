import {Application} from "express";

/**
 * Adds routes for express App.
 * @param {Application} app express instance
 */
export function routes(app: Application) {
  app.get("/sign-in",
    (req, res) => {
      return res.status(200).send({message: "Hello World"});
    }
  );
}
