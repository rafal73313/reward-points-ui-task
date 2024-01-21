import { calculateRewardsPoints } from './calculateRewardPoints';

const splitIntoArrayOfSeaparateUserObjects = (allUsersMerged) => {
  return Object.entries(allUsersMerged).map((item) => {
    return {
      ...item[1],
      email: item[0]
    };
  });
};

export const mergeAllTransactionsPerUser = (transactions) => {
  const allUsersMerged = {};

  transactions.forEach((item) => {
    const { email, date, amount } = item;
    allUsersMerged[email] = allUsersMerged[email] ? allUsersMerged[email] : {};

    const month = new Date(date).getMonth();
    const points = calculateRewardsPoints(amount);
    const user = allUsersMerged[email];

    user.noTransactions = user.noTransactions ? user.noTransactions + 1 : 1;

    user.pointsEachMonth = user.pointsEachMonth ? user.pointsEachMonth : {};
    user.pointsEachMonth[month] = user.pointsEachMonth[month]
      ? user.pointsEachMonth[month] + points
      : points;

    user.pointsTotal = user.pointsTotal ? user.pointsTotal + points : points;
  });

  return splitIntoArrayOfSeaparateUserObjects(allUsersMerged);
};
