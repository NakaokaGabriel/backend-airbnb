import { AppError } from '@shared/errors/AppError';

import { FakeHash } from '@shared/containers/providers/hash/fakes/FakeHash';
import { FakeHostRepository } from '../../repositories/fakes/FakeHostRepository';
import { CreateHostService } from '../CreateHostService';

let fakeHostRepository: FakeHostRepository;
let fakeHash: FakeHash;

let createHostService: CreateHostService;

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
    await fakeHostRepository.create({
      name: 'test',
      email: 'test@hotmail.com',
      password: '123456',
      host_type: true,
      host_verify: true,
      stars: 2,
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
