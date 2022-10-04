import { StormGlass } from '@src/client/stormGlass';
import axios from 'axios';

import stormGlassAPIResponse from '@test/fixtures/stormGlass_API_response.json';
import stormGlassAPIResponseNormalized from '@test/fixtures/stormGlass_API_response_normalized.json';

jest.mock('axios');

describe('Test stormglass api call', () => {
  it('should return forecast data from stormglass normalized', async () => {
    const lat = -1.5451;
    const lng = -48.645;

    axios.get = jest.fn().mockResolvedValue({ stormGlassAPIResponse });

    const stormGlass = new StormGlass(axios);
    const res = await stormGlass.fetchPoint(lat, lng);
    expect(res).toEqual({ stormGlassAPIResponseNormalized });
  });
});
