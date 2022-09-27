import axios from 'axios';
export class StormGlass {
  private instance = axios.create({
    baseURL: 'https://api.stormglass.io/v2/weather/point',
    headers: {
      Authorization:
        '7d2bd354-3e93-11ed-b34b-0242ac130002-7d2bd3c2-3e93-11ed-b34b-0242ac130002',
    },
  });
  public async fetchPoint(lat: number, lng: number): Promise<{}> {
    this.instance.get('/', {
      params: {
        lat,
        lng,
        params: ['time', 'airTemperature', 'airTemperature'],
      },
    });
    return Promise.resolve({});
  }
}
