import { FakeRemainRepository } from '@modules/remain/repositories/fakes/FakeRemainRepository';
import { FindRemainByCountry } from '../FindRemainByCountry';

let fakeRemainRepository: FakeRemainRepository;

let findRemainByCountry: FindRemainByCountry;

describe('FindRemainByCountry', () => {
  beforeEach(() => {
    fakeRemainRepository = new FakeRemainRepository();

    findRemainByCountry = new FindRemainByCountry(fakeRemainRepository);
  });

  it('should be able show all remain based on your country', async () => {});
});
