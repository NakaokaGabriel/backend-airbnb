import { inject, injectable } from 'tsyringe';

import { IRemainRepository } from '../repositories/IRemainRepository';
import { Remain } from '../infra/database/typeorm/entities/Remain';

@injectable()
export class FindRemainByCountry {
  constructor(
    @inject('RemainRepository')
    private remainRepository: IRemainRepository,
  ) {}

  public async execute(): Promise<Remain[] | undefined> {
    const remain = await this.remainRepository.findByCountry();

    return remain;
  }
}
