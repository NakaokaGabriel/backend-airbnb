import { container } from 'tsyringe';

import { IHostRepository } from '@modules/host/repositories/IHostRepository';
import { HostRepository } from '@modules/host/infra/database/typeorm/repositories/HostRepository';

// import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
// import { UsersRepository } from '@modules/users/infra/database/typeorm/repository/UsersRepository';

import { IHashRepository } from './providers/hash/repository/IHashRepository';
import { BCrypt } from './providers/hash/services/BCrypt';

container.registerSingleton<IHostRepository>('HostRepository', HostRepository);

// container.registerSingleton<IUsersRepository>(
//   'UsersRepository',
//   UsersRepository,
// );

container.registerSingleton<IHashRepository>('HashRepository', BCrypt);
