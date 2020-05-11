// Initializes the `ar-demo` service on path `/ar-demo`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { ArDemo } from './ar-demo.class';
import hooks from './ar-demo.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'ar-demo': ArDemo & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ar-demo', new ArDemo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ar-demo');

  service.hooks(hooks);
}
