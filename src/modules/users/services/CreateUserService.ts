import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IHashRepository } from '@shared/containers/providers/hash/repository/IHashRepository';

import { IUsersRepository } from '../repositories/IUsersRepository';
import { User } from '../infra/database/typeorm/entities/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

@injectable()
export class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashRepository')
    private hashRepository: IHashRepository,
  ) {}

  public async execute({ name, email, password }: Request): Promise<User> {
    const sameEmail = await this.usersRepository.findByEmail(email);

    if (sameEmail) {
      throw new AppError('this email already exist');
    }

    const passwordHash = await this.hashRepository.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}
