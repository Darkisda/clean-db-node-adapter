import { UserRepository } from "./core/entities/user-repository";
import { FindAllUsers } from "./core/usecases/find-all-users";
import { DatabaseAdapter } from "./infra/database/adapters";
import { MYSQLConnection } from "./infra/database/mysql-connection";
import { PGConnection } from "./infra/database/pg-connection";
import { UserRepositoryImp } from "./infra/database/repositories/user-repository-imp";

async function main() {
    const dbAdapter: DatabaseAdapter = new PGConnection();
    const userRepository: UserRepository = new UserRepositoryImp(dbAdapter);
    const useCase = new FindAllUsers(userRepository);
    const response = await useCase.exec();
    console.log(response);
}

main();