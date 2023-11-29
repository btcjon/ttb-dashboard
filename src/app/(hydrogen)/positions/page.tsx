import dynamic from 'next/dynamic';

// Add the /* @client */ directive inside the PositionsPage function, just above the return statement
const PositionsPageComponent = dynamic(() => import('./PositionsPageComponent'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export default function PositionsPage() {
  /* @client */
  return <PositionsPageComponent />;
}

export default function PositionsPage() {
  return <PositionsPageComponent />;
}
