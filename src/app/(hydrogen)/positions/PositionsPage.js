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
        const response = await axios.get(`https://metastats-api-v1.new-york.agiliumtrade.ai/users/current/accounts/28c98cc1-cc61-4220-8a39-e4896ad746a5/open-trades?api_key=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyODQxMmYzMTYwN2Y4ZTEyOTc0NGM4MDkwNmRhMjQ4ZiIsInBlcm1pc3Npb25zIjpbXSwiYWNjZXNzUnVsZXMiOlt7ImlkIjoidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpIiwibWV0aG9kcyI6WyJ0cmFkaW5nLWFjY291bnQtbWFuYWdlbWVudC1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6MjhjOThjYzEtY2M2MS00MjIwLThhMzktZTQ4OTZhZDc0NmE1Il19LHsiaWQiOiJtZXRhYXBpLXJlc3QtYXBpIiwibWV0aG9kcyI6WyJtZXRhYXBpLWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDoyOGM5OGNjMS1jYzYxLTQyMjAtOGEzOS1lNDg5NmFkNzQ2YTUiXX0seyJpZCI6Im1ldGFhcGktcnBjLWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6d3M6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjI4Yzk4Y2MxLWNjNjEtNDIyMC04YTM5LWU0ODk2YWQ3NDZhNSJdfSx7ImlkIjoibWV0YWFwaS1yZWFsLXRpbWUtc3RyZWFtaW5nLWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6d3M6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjI4Yzk4Y2MxLWNjNjEtNDIyMC04YTM5LWU0ODk2YWQ3NDZhNSJdfSx7ImlkIjoibWV0YXN0YXRzLWFwaSIsIm1ldGhvZHMiOlsibWV0YXN0YXRzLWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDoyOGM5OGNjMS1jYzYxLTQyMjAtOGE
          headers: {
            'Accept': 'application/json',
            'auth-token': 'DoyOGM5OGNjMS1jYzYxLTQyMjAtOGEzOS1lNDg5NmFkNzQ2YTUiXX0seyJpZCI6InJpc2stbWFuYWdlbWVudC1hcGkiLCJtZXRob2RzIjpbInJpc2stbWFuYWdlbWVudC1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6MjhjOThjYzEtY2M2MS00MjIwLThhMzktZTQ4OTZhZDc0NmE1Il19XSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6IjI4NDEyZjMxNjA3ZjhlMTI5NzQ0YzgwOTA2ZGEyNDhmIiwiaWF0IjoxNjk5MDU4ODYxfQ.QjBVtwztrqilXMfS5LDDREti6ZYDnltQOW-d6MlSu4DF2yces632DbR-RT9z43Ukqd5Y0ON9tczjmrIu5SWm_7T4qvL_mBxEVypUIHpd8gXys98QUx5-ME_7zd2ADfUsK7-EFn7eO4NXwjWMurOEC_80FvJko-Lmz50u0qJ9BapeQXvMMCi4hCOlS9Va3ROMVlrjS_pMMfVMk55fGgYcO-qkmE35yj9psY_wBNWVGV7q-VWDKouLr2zdeH9NRQ5uOW7Xwlj7g6sZkw1m0ew9U5Lplnv4aKezTXRXe1FfbW2lTwR6DAYGUESPzuax0SKFDbOIcuQjepigF44LNu6ILzLh0Ue1ort43XQbEMyUkHxNnh36U54zawPaRDssOLZq6n9fLVSUclo6NMhubBNC76EvM3clRh9sjfJj6uA5hGCAPBZPc_tnG5y0ywboo1vMgQFHzh1hpKyXJOwF76W4hwSNfjQfHeNHh6XUTK_U7rolExuDg40zR5Kvt7aWuT-lxHyIvmtfKjiQ_HgSFhU2ac5y9zMxXWsZYguTwhyHKrOwDa99ayxOtslnTw7XAggziF_NCzIUrAQW16VFlaTIimJijhGnvH_nKvbmoHJhMq5aipXO6IyqFsCtLRg5RzjiVHK9DCnFTHfKqQ2madCSzIBYv4j1DSWW1dhDFEbqCbk`, {
            });
            
            const processedData = response.data.map(trade => ({
              symbol: trade.symbol,
              type: trade.tradeType,
              volume: trade.volume,
              profit: trade.profit
            }));
            console.log(processedData); 
            setData(processedData);
            setIsLoading(false);
        });
      } catch (error) {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000); 

    return () => clearInterval(intervalId);
  }, []);

  const getColumns = () => {
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
        title: 'Unrealized Profit',
        dataIndex: 'unrealizedProfit',
        key: 'unrealizedProfit',
      },
      {
        title: 'Swap',
        dataIndex: 'swap',
        key: 'swap',
      },
      {
        title: 'Realized Swap',
        dataIndex: 'realizedSwap',
        key: 'realizedSwap',
      },
      {
        title: 'Unrealized Swap',
        dataIndex: 'unrealizedSwap',
        key: 'unrealizedSwap',
      },
    ];
  };

  return (
    <ControlledTable
      isLoading={isLoading}
      data={data}
      columns={getColumns()}
      // other props...
    />
  );
}
