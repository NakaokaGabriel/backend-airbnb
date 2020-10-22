import { IRemainRepository } from '../repositories/IRemainRepository';
import { Remain } from '../infra/database/typeorm/entities/Remain';

export class FindRemainByCountry {
  constructor(private remainRepository: IRemainRepository) {}

  public async execute(): Promise<Remain | undefined> {
    return remain;
  }
}
