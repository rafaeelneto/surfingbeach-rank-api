import { StormGlass } from '@src/client/stormGlass';

describe('Test stormglass api call', () => {
  it('should return forecast data from stormglass normalized', async () => {
    const lat = -1.5451;
    const lng = -48.645;

    const stormGlass = new StormGlass();
    const res = await stormGlass.fetchPoint(lat, lng);
    expect(res).toEqual({});
  });
});
