import { ICreateRemainDTO } from '../dtos/ICreateRemainDTO';
import { Remain } from '../infra/database/typeorm/entities/Remain';

export interface IRemainRepository {
  create(data: ICreateRemainDTO): Promise<Remain>;
  findByCountry(): Promise<Remain[] | undefined>;
}
