export interface IRepository<T, C, U> {
  create: (item: C) => Promise<T>;
  findAll: () => Promise<T[]>;
  findOne: (id: string) => Promise<T>;
  update: (id: string, item: U) => Promise<T>;
  delete: (id: string) => Promise<boolean>;
}
