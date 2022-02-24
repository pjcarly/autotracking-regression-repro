import Component from "@glimmer/component";
import { restartableTask } from "ember-concurrency";
import { taskFor } from "ember-concurrency-ts";
import { inject as service } from '@ember/service';
import Store from "@ember-data/store";
import AirportModel from "autotracking-regression-repro/models/airport";
import { tracked } from "@glimmer/tracking";

export interface Arguments {

}

export default class ListItemsComponent extends Component<Arguments> {
  @service store !: Store;

  @tracked records: AirportModel[] = [];

  constructor(owner: any, args: Arguments) {
    super(owner, args);

    taskFor(this.load).perform();
  }

  @restartableTask
  async load(): Promise<void> {
    await this.store.query('airport', {})
      .then((response) => {
        const records: AirportModel[] = [];

        response.forEach((airport) => {
          records.push(airport);
        });

        this.records = records;
      });
  }
}