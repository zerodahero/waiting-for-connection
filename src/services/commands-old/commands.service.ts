// Initializes the `adminCommands` service on path `/admin-commands`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Commands } from './commands.class';
import hooks from './commands.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'commands': Commands & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/commands', new Commands(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('commands');

  service.hooks(hooks);
}
