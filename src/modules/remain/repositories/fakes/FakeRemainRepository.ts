import { v4 } from 'uuid';

import { ICreateRemainDTO } from '@modules/remain/dtos/ICreateRemainDTO';
import { Remain } from '@modules/remain/infra/database/typeorm/entities/Remain';
import { IRemainRepository } from '../IRemainRepository';

export class FakeRemainRepository implements IRemainRepository {
  private remains: Remain[] = [];

  public async create({
    title,
    country,
    state,
    city,
    price,
    goTo,
    stars,
  }: ICreateRemainDTO): Promise<Remain> {
    const remain = new Remain();

    Object.assign(remain, {
      id: v4(),
      title,
      country,
      state,
      city,
      price,
      goTo,
      stars,
    });

    this.remains.push(remain);

    return remain;
  }

  public async findByCountry(): Promise<Remain[] | undefined> {
    const country = this.remains.map(remain => remain);

    return country;
  }
}
