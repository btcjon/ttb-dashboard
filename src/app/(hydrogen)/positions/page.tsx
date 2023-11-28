/* @client */
import dynamic from 'next/dynamic';

const PositionsPageComponent = dynamic(() => import('./PositionsPageComponent'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export default function PositionsPage() {
  return <PositionsPageComponent />;
}

