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
    Footer: 'OrderId',
    accessor: 'orderId',
  },
  {
    Header: 'Quantity',
    Footer: 'Quantity',
    accessor: 'Quantity',
  },
  {
    Header: 'Discount',
    Footer: 'Discount',
    accessor: 'Discount',
  },
  {
    Header: 'Amount',
    Footer: 'Amount',
    accessor: 'Amount',
  },
  {
    Header: 'Date',
    Footer: 'Date',
    accessor: 'Date',
  },
  {
    Header: 'Status',
    Footer: 'Status',
    accessor: 'Status',
  },
  {
    Header: 'Action',
    Footer: 'Action',
    accessor: 'Action',
  },
];
