/* @client */
import React, { useState, useEffect } from 'react';
import { MetaApi } from 'metaapi.cloud-sdk';
import PageHeader from '@/app/shared/page-header';
import { metaObject } from '@/config/site.config';
import ControlledTable from '@/components/controlled-table';

// Function to fetch positions from MetaApi
const getPositionsFromMetaApi = async () => {
  // Assuming that the MetaApi and accountId are already defined in the scope
  const account = await api.metatraderAccountApi.getAccount(accountId);
  const connection = account.getStreamingConnection();
  await connection.connect();
  await connection.waitSynchronized();
  const positions = await connection.get_positions();
  return positions.map(position => ({
    // Adjust the structure to match your actual position data
    Symbol: position.symbol,
    Type: position.type,
    Volume: position.volume,
    Profit: position.profit.toFixed(2), // Format the profit to two decimal places
    Swap: position.swap.toFixed(2) // Format the swap to two decimal places
  }));
};

// Function to process positions data
// This function should be implemented to match the structure of your positions data
// and the way you want to display it in the table.
const processPositions = (positions) => {
  // Adjust the implementation to match your needs
  // This is just a placeholder function that returns the positions as is
  return positions;
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
