import { UserRepository } from "../entities/user-repository";

export class FindAllUsers {
  constructor(private readonly repository: UserRepository) {}

  async exec(): Promise<any> {
    return await this.repository.findAll();
  }
}