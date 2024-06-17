import moment from 'moment';
export const formatDate = (date: string) => {
  const d = new Date(date);
  const month = `0${d.getMonth() + 1}`.slice(-2);
  const day = `0${d.getDate()}`.slice(-2);
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
};

export const getLastMonths = () => {
  const currentDate = moment();
  currentDate.date(1);
  const last6Months: string[] = [];
  const last12Months: string[] = [];

  for (let i = 1; i <= 6; i++) {
    const monthDate = currentDate.clone().subtract(i, 'months');
    const monthName = monthDate.format('MMMM');
    last6Months.unshift(monthName);
  }
  for (let i = 1; i <= 12; i++) {
    const monthDate = currentDate.clone().subtract(i, 'months');
    const monthName = monthDate.format('MMMM');
    last12Months.unshift(monthName);
  }

  return {
    last12Months,
    last6Months,
  };
};
