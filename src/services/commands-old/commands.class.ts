import { Service, MemoryServiceOptions } from 'feathers-memory';
import { Params } from '@feathersjs/feathers';
import { Application } from '../../declarations';

export class Commands extends Service {
  app: Application

  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
    this.app = app;
  }

  async create(data: any, params: Params) {
    console.log(data)
    this.publish('created', (data, context) => {
      return this.app.channels('anonymous')
    })
  }
}
