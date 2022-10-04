import axios, { AxiosStatic } from 'axios';
export class StormGlass {
  // private instance = axios.create({
  //   baseURL: 'https://api.stormglass.io/v2/weather',
  //   headers: {
  //     Authorization:
  //       '7d2bd354-3e93-11ed-b34b-0242ac130002-7d2bd3c2-3e93-11ed-b34b-0242ac130002',
  //   },
  // });

  readonly APIParams =
    'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
  readonly APISource = 'noaa';

  constructor(private axios: AxiosStatic) {}

  public async fetchPoint(lat: number, lng: number): Promise<{}> {
    return this.axios.get('/point', {
      params: {
        lat,
        lng,
        source: this.APISource,
        params: this.APIParams,
      },
    });
  }
}
