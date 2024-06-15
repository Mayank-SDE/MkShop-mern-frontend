export const getStatusColor = (status: string) => {
  switch (status) {
    case 'Placed':
      return 'text-[#007BFF]';
    case 'Picked':
      return 'text-[#FFA500]';
    case 'Packed':
      return 'text-[#6F42C1]';
    case 'Shipped':
      return 'text-[#28A745]';
    case 'Delivered':
      return 'text-[#20C997]';
    default:
      return 'text-black';
  }
};
