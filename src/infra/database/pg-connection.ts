import { DatabaseAdapter } from "./adapters";
import { Pool, QueryResult } from 'pg'

export class PGConnection implements DatabaseAdapter {
    private pgPool: Pool;

    constructor() {
        this.pgPool = new Pool({user: "postgres", password: "postgres", host: "localhost", database: "db", port: 5601})
    }

    async run(query: string, ...params: string[]): Promise<QueryResult<any>> {
        const response = await this.pgPool.query(query, params)
        return response;
    }

    async close(): Promise<void> {
        this.pgPool.end();
    }
}