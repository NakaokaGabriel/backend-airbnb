import { Request, Response } from 'express';

class RemainController {
  public async index(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }
}

export default new RemainController();
