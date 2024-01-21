export const extractExactMonthsFromDataset = (transactions) => {
  const months = {};

  transactions.forEach((item) => {
    const month = new Date(item.date).getMonth();
    months[month] = month;
  });

  return Object.values(months)
    .slice(0, 3)
    .sort((a, b) => a - b);
};
