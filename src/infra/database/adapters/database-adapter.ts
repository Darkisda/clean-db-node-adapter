export interface DatabaseAdapter {
    run(query: string, ...params: string[]): Promise<any>;
    close(): Promise<void>;
}