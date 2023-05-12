import {connectionPool} from "../database/connection";
import * as functions from "firebase-functions";

/**
 * Save a climate register in database
 * @param {any} data climate data for insert in database
 */
export async function saveClimate(data: any) {
  const query = `
  INSERT INTO tb_climate (temperature, humidity, created_at, room_id)
  VALUES (
    ${data.celsius}, 
    ${data.humidity}, 
    ${data.updatedAt}, 
    '${data.room_id}')
  `;

  await connectionPool.query(query).catch((err) => functions.logger.error(err));
}
