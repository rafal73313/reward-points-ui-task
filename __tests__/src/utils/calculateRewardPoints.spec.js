const { calculateRewardsPoints } = require('../../../src/utils/calculateRewardPoints');

describe('calculateRewardPoints(n)', () => {
  const minForOnePoint = 50;
  const minForTwoPoints = 100;

  describe('should calculate DOUBLED reward points', () => {
    it('should calculate reward points for: 100', () => {
      const purchase = 100;
      const expected = purchase - minForOnePoint;

      const rewardPoints = calculateRewardsPoints(purchase);
      expect(rewardPoints).toBe(expected);
    });

    it('should calculate reward points for: 121', () => {
      const purchase = 121;
      const expected = (purchase - minForTwoPoints) * 2;

      const rewardPoints = calculateRewardsPoints(purchase);
      expect(rewardPoints).toBe(expected);
    });

    it('should calculate reward points for: 333', () => {
      const purchase = 333;
      const expected = (purchase - minForTwoPoints) * 2;

      const rewardPoints = calculateRewardsPoints(purchase);
      expect(rewardPoints).toBe(expected);
    });

    it('should calculate reward points for: 1000', () => {
      const purchase = 1000;
      const expected = (purchase - minForTwoPoints) * 2;

      const rewardPoints = calculateRewardsPoints(purchase);
      expect(rewardPoints).toBe(expected);
    });
  });

  describe('should calculate SINGULAR reward points', () => {
    it('should calculate reward points for: 50', () => {
      const purchase = 50;
      const expected = purchase - minForOnePoint;

      const rewardPoints = calculateRewardsPoints(purchase);
      expect(rewardPoints).toBe(expected);
    });

    it('should calculate reward points for: 99', () => {
      const purchase = 99;
      const expected = purchase - minForOnePoint;

      const rewardPoints = calculateRewardsPoints(purchase);
      expect(rewardPoints).toBe(expected);
    });

    it('should calculate reward points for: 101', () => {
      const purchase = 101;
      const expected = (purchase - minForTwoPoints) * 2;

      const rewardPoints = calculateRewardsPoints(purchase);
      expect(rewardPoints).toBe(expected);
    });
  });
});
