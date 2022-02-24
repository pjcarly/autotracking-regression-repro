import Route from "@ember/routing/route";
import transition from "@ember/routing/-private/transition";
import { inject as service } from '@ember/service';
import Store from "@ember-data/store";

export default class IndexRoute extends Route {
  @service store !: Store;

  beforeModel(transition: transition<unknown>): void | Promise<unknown> {
    super.beforeModel(transition);

    return this.store.findAll("airport");
  }
}