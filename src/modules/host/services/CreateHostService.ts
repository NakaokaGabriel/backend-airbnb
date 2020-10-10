import { AppError } from '@shared/errors/AppError';

import { Host } from '../infra/database/entities/Host';
import { IHostRepository } from '../repositories/IHostRepository';

interface Request {
  name: string;
  email: string;
  password: string;
  host_verify?: boolean;
  host_type?: boolean;
  stars?: number;
}

export class CreateHostService {
  constructor(private hostsRepository: IHostRepository) {}

  public async execute({
    name,
    email,
    password,
    host_verify = false,
    host_type = false,
    stars = 0,
  }: Request): Promise<Host> {
    const sameHost = await this.hostsRepository.findByEmail(email);

    if (sameHost) {
      throw new AppError('This user already exist');
    }

    const host = await this.hostsRepository.create({
      name,
      email,
      password,
      host_verify,
      host_type,
      stars,
    });

    return host;
  }
}
