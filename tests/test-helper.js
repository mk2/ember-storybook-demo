import Application from 'ember-storybook-demo/app';
import config from 'ember-storybook-demo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
