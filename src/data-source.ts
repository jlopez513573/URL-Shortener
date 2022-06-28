import { DataSource } from "typeorm";
import { Url } from "./entity/Url";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/db/urlShrink.db",
  synchronize: true,
  logging: true,
  entities: [Url],
});
