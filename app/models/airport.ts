import Model, { attr } from "@ember-data/model";
// @ts-ignore
import { fragment } from 'ember-data-model-fragments/attributes';
import Geolocation from "./geolocation";

export default class AirportModel extends Model {
  @attr('string')
  name!: string;

  @attr('string')
  city!: string;

  @fragment('geolocation')
  geolocation!: Geolocation;

  @attr('string')
  "iata-faa"!: string;

  @attr('string')
  icao!: string;
}