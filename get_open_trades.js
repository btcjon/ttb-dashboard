import pkg from 'metaapi.cloud-sdk';
const { MetaApi } = pkg;

// your MetaApi API token
let token = process.env.TOKEN || '<put in your token here>';
// your MetaApi account id
let accountId = process.env.ACCOUNT_ID || '<put in your MetaApi account id here>';

const api = new MetaApi(token);

async function getAccountOpenTrades() {
  try {
    const account = await api.metatraderAccountApi.getAccount(accountId);
    await account.deploy();
    await account.waitConnected();
    let connection = account.getRPCConnection();
    await connection.connect();
    await connection.waitSynchronized();
    let openTrades = await connection.getPositions();
    // The rest of the code remains the same

  } catch (err) {
    console.error(err);
  }
  process.exit();
}

export default getAccountOpenTrades;
