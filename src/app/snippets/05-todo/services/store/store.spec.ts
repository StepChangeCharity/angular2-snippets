import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/angular2';
import {MemoryStore} from './store';


describe('Storage Service', () => {

  beforeEachProviders(() => []);


  it('should ...', inject([MemoryStore], (service:MemoryStore) => {

  }));

});
