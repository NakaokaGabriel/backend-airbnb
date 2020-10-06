import { AppError } from '@shared/errors/AppError';

import { Host } from '../infra/knex/entities/Host';
import { IHostRepository } from '../repositories/IHostRepository';

interface Request {
  name: string;
  email: string;
  password: string;
}

export class CreateHostService {
  constructor(private hostsRepository: IHostRepository) {}

  public async execute({ name, email, password }: Request): Promise<Host> {
    const sameHost = await this.hostsRepository.findByEmail(email);

    if (sameHost) {
      throw new AppError('This user already exist', 402);
    }

    const host = await this.hostsRepository.create({
      name,
      email,
      password,
    });

    return host;
  }
}
