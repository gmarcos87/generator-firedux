'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-firedux:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments(['test'])
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'actions/test.actions.ts',
      'effects/test.effects.ts',
      'models/test.model.ts',
      'providers/test.service.ts',
      'reducers/test.reducer.ts'
    ]);
  });
});
