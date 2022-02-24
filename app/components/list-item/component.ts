import Component from "@glimmer/component";
import AirportModel from "autotracking-regression-repro/models/airport";

export interface Arguments {
  model: AirportModel;
}

export default class ListItemComponent extends Component<Arguments> {
}