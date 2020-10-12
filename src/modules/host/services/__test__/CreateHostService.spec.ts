import { AppError } from '@shared/errors/AppError';

import { FakeHash } from '@shared/containers/providers/hash/fakes/FakeHash';
import { CreateHostService } from '../CreateHostService';
import { FakeHostRepository } from '../../repositories/fakes/FakeHostRepository';

let createHostService: CreateHostService;

let fakeHostRepository: FakeHostRepository;
let fakeHash: FakeHash;

describe('CreateHosts', () => {
  beforeEach(() => {
    fakeHostRepository = new FakeHostRepository();
    fakeHash = new FakeHash();

    createHostService = new CreateHostService(fakeHostRepository, fakeHash);
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
