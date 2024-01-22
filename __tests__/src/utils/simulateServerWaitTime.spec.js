import { simulateServerWaitTime } from '../../../src/utils/simulateServerWaitTime';

jest.useFakeTimers();

describe('simulateServerWaitTime(timeToWait)', () => {
  let setTimeoutSpy;

  beforeEach(() => {
    jest.clearAllTimers();
    setTimeoutSpy = jest.spyOn(global, 'setTimeout');
  });

  afterEach(() => {
    setTimeoutSpy.mockRestore();
  });

  it('should return a promise that resolves after 1 second', async () => {
    const timeToWait = 1000;
    const promise = simulateServerWaitTime(timeToWait);

    jest.advanceTimersByTime(timeToWait);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), timeToWait);

    await expect(promise).resolves.toBeUndefined();
  });
  it('should return a promise that resolves after 3 seconds', async () => {
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

    const timeToWait = 3000;
    const promise = simulateServerWaitTime(timeToWait);

    jest.advanceTimersByTime(timeToWait);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), timeToWait);

    await expect(promise).resolves.toBeUndefined();
  });
});
