import { randomUUID } from 'node:crypto';

export class SpecificationModel {
  public id?: string;
  public name: string;
  public description: string;
  public createdAt: Date;

  constructor() {
    if (!this.id) this.id = randomUUID();
  }
}
