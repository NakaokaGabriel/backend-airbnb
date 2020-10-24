import { getRepository, Repository } from 'typeorm';

import { IRemainRepository } from '@modules/remain/repositories/IRemainRepository';
import { ICreateRemainDTO } from '@modules/remain/dtos/ICreateRemainDTO';
import { Remain } from '../entities/Remain';

export class RemainRepository implements IRemainRepository {
  private ormRepository: Repository<Remain>;

  constructor() {
    this.ormRepository = getRepository(Remain);
  }

  public async create(data: ICreateRemainDTO): Promise<Remain> {
    const remain = this.ormRepository.create(data);

    await this.ormRepository.save(remain);

    return remain;
  }

  public async findByCountry(): Promise<Remain[] | undefined> {
    const remain = await this.ormRepository.find();

    return remain;
  }
}
