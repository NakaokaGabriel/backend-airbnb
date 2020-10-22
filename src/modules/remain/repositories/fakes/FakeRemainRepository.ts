import { Remain } from '@modules/remain/infra/database/typeorm/entities/Remain';
import { IRemainRepository } from '../IRemainRepository';

export class FakeRemainRepository implements IRemainRepository {
  private remains: Remain[] = [];

  public async findByCountry(): Promise<Remain | undefined> {
    return this.remains;
  }
}
