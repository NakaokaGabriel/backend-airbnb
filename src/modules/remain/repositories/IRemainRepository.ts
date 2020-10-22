import { Remain } from '../infra/database/typeorm/entities/Remain';

export interface IRemainRepository {
  findByCountry(): Promise<Remain | undefined>;
}
