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
  // Add your table data here
];
const columns = [
  // Define your table columns here
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
