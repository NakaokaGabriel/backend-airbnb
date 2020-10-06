import { CreateHostService } from '../CreateHostService';

const createHostService = new CreateHostService();

describe('CreateHosts', () => {
  it('should be able create hosts', async () => {
    const host = await createHostService.execute();

    expect(host).toBe('test');
  });
});
