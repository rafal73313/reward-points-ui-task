import { mergeAllTransactionsPerUser } from '../../../src/utils/mergeAllTransactionsPerUser';

describe('mergeAllTransactionsPerUser(transactions)', () => {
  it('should return an object with the user email as key and correclty calculated points', () => {
    const transactions = [
      { transaction_id: 1, email: '1@gmail.com', amount: 55, date: '2020-01-01' },
      { transaction_id: 2, email: '1@gmail.com', amount: 120, date: '2020-02-01' },
      { transaction_id: 3, email: '2@gmail.com', amount: 130, date: '2020-01-01' },
      { transaction_id: 4, email: '2@gmail.com', amount: 40, date: '2020-02-01' },
      { transaction_id: 5, email: '3@gmail.com', amount: 150, date: '2020-01-01' },
      { transaction_id: 6, email: '3@gmail.com', amount: 60, date: '2020-02-01' }
    ];

    const expected = [
      {
        email: '1@gmail.com',
        noTransactions: 2,
        pointsEachMonth: { 0: 5, 1: 40 },
        pointsTotal: 45
      },
      {
        email: '2@gmail.com',
        noTransactions: 2,
        pointsEachMonth: { 0: 60, 1: 0 },
        pointsTotal: 60
      },
      {
        email: '3@gmail.com',
        noTransactions: 2,
        pointsEachMonth: { 0: 100, 1: 10 },
        pointsTotal: 110
      }
    ];

    expect(mergeAllTransactionsPerUser(transactions)).toEqual(expected);
  });
});
