import { randomUUID } from 'node:crypto';

export class CategoryModel {
  public id?: string;
  public name: string;
  public description: string;
  public createdAt: Date;

  constructor() {
    if (!this.id) this.id = randomUUID();
  }
}
