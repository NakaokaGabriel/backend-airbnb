import { AppError } from '@shared/errors/AppError';

import { CreateHostService } from '../CreateHostService';
import { FakeHostRepository } from '../../repositories/fakes/FakeHostRepository';

let fakeHostRepository: FakeHostRepository;
let createHostService: CreateHostService;

describe('CreateHosts', () => {
  beforeEach(() => {
    fakeHostRepository = new FakeHostRepository();

    createHostService = new CreateHostService(fakeHostRepository);
  });

  it('should be able create hosts', async () => {
    const host = await createHostService.execute({
      name: 'test',
      email: 'test@hotmail.com',
      password: '123456',
    });

    expect(host).toHaveProperty('id');
    expect(host.name).toBe('test');
    expect(host.password).toBe('123456');
  });

  it('should not be able create a host with the same email', async () => {
    await createHostService.execute({
      name: 'test',
      email: 'test@hotmail.com',
      password: '123456',
    });

    await expect(
      createHostService.execute({
        name: 'test',
        email: 'test@hotmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
