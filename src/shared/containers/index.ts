import { container } from 'tsyringe';

import { IHostRepository } from '@modules/host/repositories/IHostRepository';
import { HostRepository } from '@modules/host/infra/database/repositories/HostRepository';

container.registerSingleton<IHostRepository>('HostRepository', HostRepository);
