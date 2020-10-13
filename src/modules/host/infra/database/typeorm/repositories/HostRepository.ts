import { getRepository, Repository } from 'typeorm';

import { IHostRepository } from '@modules/host/repositories/IHostRepository';
import { ICreateHostDTO } from '@modules/host/dtos/ICreateHostDTO';

import { Host } from '../entities/Host';

export class HostRepository implements IHostRepository {
  private ormRepository: Repository<Host>;

  constructor() {
    this.ormRepository = getRepository(Host);
  }

  public async create(data: ICreateHostDTO): Promise<Host> {
    const host = this.ormRepository.create(data);

    await this.ormRepository.save(host);

    return host;
  }

  public async findByEmail(email: string): Promise<Host | undefined> {
    const hostEmail = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return hostEmail;
  }
}
