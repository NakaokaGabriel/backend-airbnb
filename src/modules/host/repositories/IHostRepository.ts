import { Host } from '../infra/database/typeorm/entities/Host';

import { ICreateHostDTO } from '../dtos/ICreateHostDTO';

export interface IHostRepository {
  create(data: ICreateHostDTO): Promise<Host>;
  findByEmail(email: string): Promise<Host | undefined>;
}
