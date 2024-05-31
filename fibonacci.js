function fibIter(n) {
  const fibArr = [0, 1];
  if (n == 1) return [0];

  for (let i = 2; i < n; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
  }
  return fibArr;
}

function fibRec(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  const recArr = fibRec(n - 1);
  return [...recArr, recArr.pop() + recArr.pop()];
}

console.log(fibIter(10));
console.log(fibRec(10));
