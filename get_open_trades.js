import fs from 'fs';
import pkg from 'metaapi.cloud-sdk';
const { MetaStats } = pkg;

// your MetaApi API token
let token = process.env.TOKEN || '<put in your token here>';
// your MetaApi account id
let accountId = process.env.ACCOUNT_ID || '<put in your MetaApi account id here>';

const metaStats = new MetaStats(token);

async function getAccountOpenTrades() {
  try {
    let openTrades = await metaStats.getAccountOpenTrades(accountId);
    // Define the filename where the output will be saved
    let filename = 'openTradesOutput.json';
    // Convert the openTrades object to a string in JSON format
    let data = JSON.stringify(openTrades, null, 2);
    // Write the data to a file
    fs.writeFileSync(filename, data);
    console.log(`Open trades have been written to ${filename}`);

  } catch (err) {
    console.error(err);
  }
  process.exit();
}

module.exports = getAccountOpenTrades;
