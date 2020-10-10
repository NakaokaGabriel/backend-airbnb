import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateHostService } from '@modules/host/services/CreateHostService';

class HostControllers {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createHostService = container.resolve(CreateHostService);

    const hosts = await createHostService.execute({
      name,
      email,
      password,
    });

    return response.status(202).json(hosts);
  }
}

export default new HostControllers();
