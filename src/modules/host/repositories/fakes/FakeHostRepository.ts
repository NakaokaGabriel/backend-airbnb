import { v4 } from 'uuid';

import { Host } from '../../infra/database/typeorm/entities/Host';
import { IHostRepository } from '../IHostRepository';
import { ICreateHostDTO } from '../../dtos/ICreateHostDTO';

export class FakeHostRepository implements IHostRepository {
  private hosts: Host[] = [];

  public async create({
    name,
    email,
    password,
    host_verify,
    host_type,
    stars,
  }: ICreateHostDTO): Promise<Host> {
    const host = new Host();

    Object.assign(host, {
      id: v4(),
      name,
      email,
      password,
      host_verify,
      host_type,
      stars,
    });

    this.hosts.push(host);

    return host;
  }

  public async findByEmail(email: string): Promise<Host | undefined> {
    const foundHosts = this.hosts.find(host => host.email === email);

    return foundHosts;
  }
}
