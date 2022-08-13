function solution(statues) {
  const sortedStatues = statues.sort((a, b) => a - b);
  let neededStatus = 0;
  for (let i = 0; i < sortedStatues.length - 1; i++) {
    if (sortedStatues[i + 1] - sortedStatues[i] !== 1) {
      neededStatus += sortedStatues[i + 1] - sortedStatues[i] - 1;
    }
  }

  return neededStatus;
}
