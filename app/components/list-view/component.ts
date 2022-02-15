import Component from "@glimmer/component";
import { task } from "ember-concurrency";
import { taskFor } from "ember-concurrency-ts";

export interface Arguments {

}

export default class ListViewComponent extends Component<Arguments> {
  constructor(owner: any, args: Arguments) {
    super(owner, args);

    taskFor(this.load).perform();
  }

  @task
  async load(): Promise<void> {
    await Promise.resolve();
    console.log('yo');
  }
}