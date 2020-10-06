import { Host } from '../infra/knex/entities/Host';
import { IHostRepository } from '../repositories/IHostRepository';

interface Request {
  name: string;
  email: string;
  password: string;
  host_verify: boolean;
  host_type: boolean;
  stars: number;
}

export class CreateHostService {
  private hostsRepository: IHostRepository;

  constructor() {}

  public async execute(): Promise<void> {}
}
