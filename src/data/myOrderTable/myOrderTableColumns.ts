import { Column } from 'react-table';

export const COLUMNS: Column<{
  orderId: number | any;
  Quantity: number;
  Discount: number;
  Amount: number;
  Status: string;
  Action: string;
  Date: string;
}>[] = [
  {
    Header: 'OrderId',
    accessor: 'orderId',
  },
  {
    Header: 'Quantity',
    accessor: 'Quantity',
  },
  {
    Header: 'Discount',
    accessor: 'Discount',
  },
  {
    Header: 'Amount',
    accessor: 'Amount',
  },
  {
    Header: 'Date',
    accessor: 'Status',
  },
  {
    Header: 'Status',
    accessor: 'Action',
  },
  {
    Header: 'Action',
    accessor: 'Date',
  },
];
