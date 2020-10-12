import { User } from '../infra/database/typeorm/entities/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    return {
      name,
      email,
      password,
    };
  }
}
