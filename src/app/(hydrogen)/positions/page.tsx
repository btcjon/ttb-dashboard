import dynamic from 'next/dynamic';

const PositionsPage = dynamic(
  () => import('./PositionsPageComponent'),
  { ssr: false }
);

export default PositionsPage;

