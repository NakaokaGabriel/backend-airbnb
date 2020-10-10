import { container } from 'tsyringe';

import { IHostRepository } from '@modules/host/repositories/IHostRepository';
import { HostRepository } from '@modules/host/infra/database/repositories/HostRepository';

import { IHashRepository } from './providers/hash/repository/IHashRepository';
import { BCrypt } from './providers/hash/services/BCrypt';

container.registerSingleton<IHostRepository>('HostRepository', HostRepository);

container.registerSingleton<IHashRepository>('HashRepository', BCrypt);
