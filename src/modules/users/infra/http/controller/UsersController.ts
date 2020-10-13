import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserService } from '@modules/users/services/CreateUserService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUsersService = container.resolve(CreateUserService);

    const users = await createUsersService.execute({
      name,
      email,
      password,
    });

    return response.status(202).json(users);
  }
}

export default new UsersController();
