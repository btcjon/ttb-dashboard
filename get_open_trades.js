let MetaStats = require('metaapi.cloud-sdk').MetaStats;

// your MetaApi API token
let token = process.env.TOKEN || '<put in your token here>';
// your MetaApi account id
let accountId = process.env.ACCOUNT_ID || '<put in your MetaApi account id here>';

const metaStats = new MetaStats(token);

async function getAccountOpenTrades() {
  try {
    let openTrades = await metaStats.getAccountOpenTrades(accountId);
    console.log(openTrades);//-> {_id: ..., gain: ..., ...}

  } catch (err) {
    console.error(err);
  }
  process.exit();
}

module.exports = getAccountOpenTrades;
