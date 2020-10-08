import { IHostRepository } from '@modules/host/repositories/IHostRepository';
import { ICreateHostDTO } from '@modules/host/dtos/ICreateHostDTO';
import { Host } from '../entities/Host';

export class HostRepositories implements IHostRepository {
  constructor() {}

  public async create(data: ICreateHostDTO): Promise<Host> {}

  public async findByEmail(email: string): Promise<Host | undefined> {}
}
