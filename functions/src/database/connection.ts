import {Pool} from "pg";

export const connectionPool = new Pool({
  host: "rds-postgres-choco-tech.cq72brsxchlx.us-east-2.rds.amazonaws.com",
  port: 5432,
  user: "choco_admin",
  database: "choco_iot",
  password: "ChocoGilbertoIOT",
});
