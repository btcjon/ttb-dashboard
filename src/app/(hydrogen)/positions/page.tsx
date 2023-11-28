import React, { useState, useEffect } from 'react';
import { MetaApi } from 'metaapi.cloud-sdk';
import PageHeader from '@/app/shared/page-header';
import { metaObject } from '@/config/site.config';
import ControlledTable from '@/components/controlled-table';

// Function to fetch positions from MetaApi
const getPositionsFromMetaApi = async (api, accountId) => {
  const account = await api.metatraderAccountApi.getAccount(accountId);
  const connection = account.getStreamingConnection();
  await connection.connect();
  await connection.waitSynchronized();
  return await connection.get_positions();
};

// Function to process positions data
// This function should be implemented to match the structure of your positions data
// and the way you want to display it in the table.
const processPositions = (positions) => {
  // Example implementation (you should adjust this to your needs):
  // Group positions by symbol and calculate total volume and P/L for each symbol
  const groupedPositions = positions.reduce((acc, position) => {
    const { symbol, type, volume, profit } = position;
    if (!acc[symbol]) {
      acc[symbol] = { symbol, buyVolume: 0, sellVolume: 0, profit: 0 };
    }
    if (type === 'BUY') {
      acc[symbol].buyVolume += volume;
    } else if (type === 'SELL') {
      acc[symbol].sellVolume += volume;
    }
    acc[symbol].profit += profit;
    return acc;
  }, {});

  // Convert the grouped positions object into an array of position data
  return Object.values(groupedPositions).map(group => ({
    Symbol: group.symbol,
    BuyVolume: group.buyVolume,
    SellVolume: group.sellVolume,
    Profit: group.profit.toFixed(2) // Assuming profit is a number and needs to be formatted
  }));
};

// MetaApi connection details
const token = process.env.META_API_TOKEN; // Assumes you have META_API_TOKEN in your .env file
const accountId = process.env.META_API_ACCOUNT_ID; // Assumes you have META_API_ACCOUNT_ID in your .env file
const api = new MetaApi(token);

export const metadata = {
  ...metaObject('Positions'),
};

const pageHeader = {
  title: 'Positions',
  breadcrumb: [
    {
      href: '/',
      name: 'Home',
    },
    {
      name: 'Positions',
    },
  ],
};

const columns = [
  { title: 'Symbol', dataIndex: 'Symbol', key: 'Symbol' },
  { title: 'Type', dataIndex: 'Type', key: 'Type' },
  { title: 'Volume', dataIndex: 'Volume', key: 'Volume' },
  { title: 'Profit', dataIndex: 'Profit', key: 'Profit' },
  { title: 'Swap', dataIndex: 'Swap', key: 'Swap' },
  // Add more columns as needed
];

export default function PositionsPage() {
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      setIsLoading(true);
      try {
        const fetchedPositions = await getPositionsFromMetaApi();
        const processedPositions = processPositions(fetchedPositions);
        setPositions(processedPositions);
      } catch (error) {
        console.error('Error fetching positions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPositions();
  }, []);

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <ControlledTable
        isLoading={isLoading}
        data={positions}
        columns={columns}
        className="mt-4"
      />
    </>
  );
}
