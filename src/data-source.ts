import "reflect-metadata";
import { DataSource } from "typeorm";
import { Employee } from "./entity/Employee";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "emp_db",
  synchronize: true,
  logging: false,
  entities: [Employee],
  migrations: [],
  subscribers: [],
});
