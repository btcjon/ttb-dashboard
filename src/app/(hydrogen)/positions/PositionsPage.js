'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import ControlledTable from '@/components/controlled-table/basic-table-widget';

export default function PositionsPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const accountId = process.env.NEXT_PUBLIC_META_API_ACCOUNT_ID || '';
        const apiToken = process.env.NEXT_PUBLIC_META_API_TOKEN || '';
        if (!accountId || !apiToken) {
          console.error('Environment variables REACT_APP_META_API_ACCOUNT_ID and REACT_APP_META_API_TOKEN must be set.');
          setIsLoading(false);
          return;
        }
        const response = await axios.get(`https://metastats-api-v1.new-york.agiliumtrade.ai/users/current/accounts/${accountId}/open-trades?api_key=${apiToken}`, {
          headers: {
            'Accept': 'application/json',
            'auth-token': `${apiToken}`,
          }
        });
            
        const tradesData = response.data.openTrades || [];
        if (!Array.isArray(tradesData)) {
          console.error('Expected an array of trades, but got:', tradesData);
          setIsLoading(false);
          return;
        }
        console.log('Response data:', tradesData);
        const processedData = tradesData.map(trade => ({
          symbol: trade.symbol,
          type: trade.tradeType,
          volume: trade.volume,
          profit: trade.profit
        }));
        console.log('Processed data:', processedData);
        setData(processedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000); 

    return () => clearInterval(intervalId);
  }, []);

  const getColumns = ({ data, sortConfig, checkedItems, handleSelectAll, onDeleteItem, onHeaderCellClick, onChecked }) => {
    return [
      {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Volume',
        dataIndex: 'volume',
        key: 'volume',
      },
      {
        title: 'Profit',
        dataIndex: 'profit',
        key: 'profit',
      },
    ];
  };

  return (
    <ControlledTable
      isLoading={isLoading}
      data={data}
      getColumns={getColumns}
      // other props...
    />
  );
}
