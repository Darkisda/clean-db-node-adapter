import { DatabaseAdapter } from "./adapters";
import { createConnection, Connection } from "mysql2";

export class MYSQLConnection implements DatabaseAdapter {
  private mysqlConn: Connection;

  constructor() {
    this.mysqlConn = createConnection({
      host: "localhost",
      user: "root",
      password: "root",
    });
  }

  async run(query: string, ...params: string[]): Promise<any> {
    const response = await this.mysqlConn.promise().query(query, params);
    return response;
  }

  async close(): Promise<void> {
    await this.mysqlConn.promise().destroy();
  }
}
