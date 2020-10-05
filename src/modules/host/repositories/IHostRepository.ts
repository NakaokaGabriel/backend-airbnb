import { Host } from '../infra/knex/entities/Host';

import { ICreateHostDTO } from '../dtos/ICreateHostDTO';

export interface IHostRepository {
  create(data: ICreateHostDTO): Promise<Host>;
}
