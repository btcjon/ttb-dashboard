import { fetchOpenTrades } from './metaApiService';
import MetaApi from 'metaapi.cloud-sdk';

jest.mock('metaapi.cloud-sdk', () => {
  return {
    MetaApi: jest.fn().mockImplementation(() => {
      return {
        metatraderAccountApi: {
          getAccount: jest.fn().mockResolvedValue({
            deploy: jest.fn().mockResolvedValue(),
            waitConnected: jest.fn().mockResolvedValue(),
            getRPCConnection: jest.fn().mockReturnValue({
              connect: jest.fn().mockResolvedValue(),
              waitSynchronized: jest.fn().mockResolvedValue(),
              getOrders: jest.fn().mockResolvedValue([{ /* mock order data */ }]),
              disconnect: jest.fn().mockResolvedValue(),
            }),
          }),
        },
      };
    }),
  };
});

describe('fetchOpenTrades', () => {
  it('returns open trades data when API call is successful', async () => {
    const openTrades = await fetchOpenTrades();
    expect(openTrades).toEqual([{ /* expected mock order data */ }]);
  });

  it('returns an empty array when API call fails', async () => {
    MetaApi.mockImplementationOnce(() => {
      throw new Error('API call failed');
    });
    const openTrades = await fetchOpenTrades();
    expect(openTrades).toEqual([]);
  });
});
