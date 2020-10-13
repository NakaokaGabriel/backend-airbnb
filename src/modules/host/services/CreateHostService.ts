import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IHashRepository } from '@shared/containers/providers/hash/repository/IHashRepository';

import { Host } from '../infra/database/typeorm/entities/Host';
import { IHostRepository } from '../repositories/IHostRepository';

interface Request {
  name: string;
  email: string;
  password: string;
  host_verify?: boolean;
  host_type?: boolean;
  stars?: number;
}

@injectable()
class CreateHostService {
  constructor(
    @inject('HostRepository')
    private hostsRepository: IHostRepository,

    @inject('HashRepository')
    private hashRepository: IHashRepository,
  ) {}

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

    const passwordHash = await this.hashRepository.generateHash(password);

    const host = await this.hostsRepository.create({
      name,
      email,
      password: passwordHash,
      host_verify,
      host_type,
      stars,
    });

    return host;
  }
}

export { CreateHostService };
