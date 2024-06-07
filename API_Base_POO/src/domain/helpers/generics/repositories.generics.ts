
export interface GenericsRepository<T extends any> {
  create: (data: T) => Promise<T>
  list: () => Promise<T[]>
}