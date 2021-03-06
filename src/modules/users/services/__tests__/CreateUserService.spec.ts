import { AppError } from '@shared/errors/AppError';

import { FakeUsersRepository } from '@modules/users/repositories/fakes/FakeUsersRepository';
import { FakeHash } from '@shared/containers/providers/hash/fakes/FakeHash';

import { CreateUserService } from '../CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashRepository: FakeHash;

let createUsersRepository: CreateUserService;

describe('CreateUsers', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashRepository = new FakeHash();

    createUsersRepository = new CreateUserService(
      fakeUsersRepository,
      fakeHashRepository,
    );
  });

  it('should be able create a new user', async () => {
    const user = await createUsersRepository.execute({
      name: 'johndoe',
      email: 'johndoe@hotmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
    expect(user.email).toBe('johndoe@hotmail.com');
    expect(user.password).toBe('123456');
  });

  it('should not be able create a new user with an email is existence', async () => {
    await fakeUsersRepository.create({
      name: 'johndoe',
      email: 'johndoe@hotmail.com',
      password: '123456',
    });

    await expect(
      createUsersRepository.execute({
        name: 'johndoe',
        email: 'johndoe@hotmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
