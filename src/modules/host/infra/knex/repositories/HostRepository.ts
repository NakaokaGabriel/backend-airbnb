import { IHostRepository } from '@modules/host/repositories/IHostRepository';
import { ICreateHostDTO } from '@modules/host/dtos/ICreateHostDTO';
import { Host } from '../entities/Host';

export class HostRepositories implements IHostRepository {
  public async create({
    name,
    email,
    password,
    host_verify,
    host_type,
    stars,
  }: ICreateHostDTO): Promise<Host> {}
}
