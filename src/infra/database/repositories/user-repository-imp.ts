import { UserRepository } from "src/core/entities/user-repository";
import { DatabaseAdapter } from "../adapters";

export class UserRepositoryImp implements UserRepository {
    constructor(private readonly dbAdapter: DatabaseAdapter) {}

    async findAll(): Promise<any> {
        // Method to find all;
        return this.dbAdapter.run("SELECT NOW() as now");
    }

}