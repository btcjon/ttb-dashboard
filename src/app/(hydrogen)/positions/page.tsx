import PageHeader from '@/app/shared/page-header';
import { metaObject } from '@/config/site.config';
import ControlledTable from '@/components/controlled-table';
import fs from 'fs';
import path from 'path';

// Function to parse positions data from the file
function parsePositionsData(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  return data.split('\n').filter(line => line.trim()).map(line => {
    try {
      return JSON.parse(line);
    } catch (error) {
      console.error('Error parsing line:', line, error);
      return null;
    }
  }).filter(position => position);
}

// Path to the positions.txt file
const positionsFilePath = path.resolve(__dirname, 'positions.txt');

// Parse positions data from the file
const parsedPositions = parsePositionsData(positionsFilePath);

// Map parsed positions to table data format
const tableData = parsedPositions.map(position => ({
  Symbol: position.symbol,
  Type: position.type.includes('BUY') ? 'Buy' : 'Sell',
  Volume: position.volume,
  Profit: position.profit,
  Swap: position.swap
}));

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

// Example data and columns for the table
const tableData = [
  { Symbol: 'EUR/USD', Type: 'Buy', Volume: 1.0, Profit: 150.00, Swap: -0.50 },
  { Symbol: 'USD/JPY', Type: 'Sell', Volume: 0.5, Profit: -75.00, Swap: -0.20 },
  { Symbol: 'GBP/USD', Type: 'Buy', Volume: 0.1, Profit: 20.00, Swap: 0.00 },
  // Add more entries as needed
];
const columns = [
  { title: 'Symbol', dataIndex: 'Symbol', key: 'Symbol' },
  { title: 'Type', dataIndex: 'Type', key: 'Type' },
  { title: 'Volume', dataIndex: 'Volume', key: 'Volume' },
  { title: 'Profit', dataIndex: 'Profit', key: 'Profit' },
  { title: 'Swap', dataIndex: 'Swap', key: 'Swap' },
  // Add more columns as needed
];

export default function PositionsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <ControlledTable
        isLoading={false} // Set to true if data is being loaded
        data={tableData}
        columns={columns}
        className="mt-4"
        // Add any additional props you need for ControlledTable
      />
    </>
  );
}
