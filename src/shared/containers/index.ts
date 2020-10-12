import { container } from 'tsyringe';

import { IHostRepository } from '@modules/host/repositories/IHostRepository';
import { HostRepository } from '@modules/host/infra/database/typeorm/repositories/HostRepository';

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
// import { HostRepository } from '@modules/users/infra/database/typeorm/repositories/';

import { IHashRepository } from './providers/hash/repository/IHashRepository';
import { BCrypt } from './providers/hash/services/BCrypt';

container.registerSingleton<IHostRepository>('HostRepository', HostRepository);

container.registerSingleton<IHashRepository>('HashRepository', BCrypt);
