// import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IUsersRepository } from '../repositories/IUsersRepository';
import { User } from '../infra/database/typeorm/entities/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({ name, email, password }: Request): Promise<User> {
    const sameEmail = await this.usersRepository.findByEmail(email);

    if (sameEmail) {
      throw new AppError('this email already exist');
    }

    const user = await this.usersRepository.create({ name, email, password });

    return user;
  }
}
