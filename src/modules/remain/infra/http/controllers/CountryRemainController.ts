import { FindRemainByCountry } from '@modules/remain/services/FindRemainByCountry';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CountryRemainController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findRemainByCountry = container.resolve(FindRemainByCountry);

    const remain = await findRemainByCountry.execute();

    return response.json(remain);
  }
}

export default new CountryRemainController();
