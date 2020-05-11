import assert from 'assert';
import app from '../../src/app';

describe('\'ar-demo\' service', () => {
  it('registered the service', () => {
    const service = app.service('ar-demo');

    assert.ok(service, 'Registered the service');
  });
});
