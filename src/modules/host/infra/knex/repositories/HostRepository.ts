import Knex from 'knex';
import knex from '@shared/infra/knex';

import { IHostRepository } from '@modules/host/repositories/IHostRepository';
import { ICreateHostDTO } from '@modules/host/dtos/ICreateHostDTO';
import { Host } from '../entities/Host';

export class HostRepositories implements IHostRepository {
  private knexRepository: Knex;

  constructor() {
    this.knexRepository = knex;
  }

  public async create(data: ICreateHostDTO): Promise<Host> {
    const host: Host = await this.knexRepository('hosts')
      .insert(data)
      .returning('json');

    return host;
  }

  public async findByEmail(email: string): Promise<Host | undefined> {}
}
