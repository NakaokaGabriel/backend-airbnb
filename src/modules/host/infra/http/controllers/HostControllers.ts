import { Request, Response } from 'express';

import { CreateHostService } from '@modules/host/services/CreateHostService';

import { HostRepositories } from '@modules/host/infra/database/repositories/HostRepository';

class HostControllers {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const hostRepository = new HostRepositories();
    const createHostService = new CreateHostService(hostRepository);

    const hosts = await createHostService.execute({
      name,
      email,
      password,
    });

    return response.json(200).json(hosts);
  }
}

export default new HostControllers();
