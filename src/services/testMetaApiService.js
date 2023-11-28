import { fetchOpenTrades } from './metaApiService';

async function testFetchOpenTrades() {
  try {
    const result = await fetchOpenTrades();
    console.log('Open Trades:', result);
  } catch (error) {
    console.error('Error fetching open trades:', error);
  }
}

testFetchOpenTrades();
