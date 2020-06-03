import assert from 'assert';
import app from '../../src/app';

describe('\'adminCommands\' service', () => {
  it('registered the service', () => {
    const service = app.service('admin-commands');

    assert.ok(service, 'Registered the service');
  });
});
