import { hash, compare } from 'bcryptjs';

import { IHashRepository } from '../repository/IHashRepository';

export class BCrypt implements IHashRepository {
  public async generateHash(payload: string): Promise<string> {
    const generateHash = await hash(payload, 10);

    return generateHash;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    const compareHash = await compare(payload, hashed);

    return compareHash;
  }
}
