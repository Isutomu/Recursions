function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const arrCopy = [...arr];
  const n = arrCopy.length;
  const leftHalf = mergeSort(arrCopy.splice(0, Math.trunc(n / 2)));
  const rightHalf = mergeSort(arrCopy);

  const outputArr = [];
  while (true) {
    if (leftHalf[0] > rightHalf[0]) {
      outputArr.push(rightHalf.shift());
      if (!rightHalf.length) return [...outputArr, ...leftHalf];
    } else {
      outputArr.push(leftHalf.shift());
      if (!leftHalf.length) return [...outputArr, ...rightHalf];
    }
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
