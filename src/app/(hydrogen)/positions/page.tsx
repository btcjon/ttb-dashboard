import PageHeader from '@/app/shared/page-header';
import { metaObject } from '@/config/site.config';
import ControlledTable from '@/components/controlled-table';

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
