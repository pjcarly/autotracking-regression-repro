import Route from '@ember/routing/route';
import { DEBUG } from '@glimmer/env'
import { worker } from 'autotracking-regression-repro/mocks/browser';

export default class ApplicationRoute extends Route {
  async beforeModel() {
    // Don't include MSW in production, only in DEBUG (tests, development)
    if (DEBUG) {
      await worker.start();
    }
  }
}