import { extractExactMonthsFromDataset } from '../../../src/utils/extractExactMonthsFromDataset';

describe('extractExactMonthsFromDataset(dataset)', () => {
  it('should return an array with the exact months from the dataset', () => {
    const transactions = [
      { transaction_id: 1, email: '1@gmail.com', amount: 55, date: '2020-01-01' },
      { transaction_id: 2, email: '1@gmail.com', amount: 120, date: '2020-02-01' },
      { transaction_id: 3, email: '2@gmail.com', amount: 130, date: '2020-01-01' },
      { transaction_id: 4, email: '2@gmail.com', amount: 40, date: '2020-02-01' },
      { transaction_id: 5, email: '3@gmail.com', amount: 150, date: '2020-01-01' },
      { transaction_id: 6, email: '3@gmail.com', amount: 60, date: '2020-02-01' }
    ];

    const expected = [0, 1];

    expect(extractExactMonthsFromDataset(transactions)).toEqual(expected);
  });
});
