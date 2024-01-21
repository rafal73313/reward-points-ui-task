export const simulateServerWaitTime = (timeToWait = 1000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeToWait);
  });
