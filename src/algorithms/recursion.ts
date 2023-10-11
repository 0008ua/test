// sum of all array elements

const arr = [2, 7, 23, 10, 25, 8];

const sum = (position: number): number => {
  if (!arr.length) {
    return 0;
  }
  if (position >= arr.length - 1) {
    return arr[position];
  }
  return arr[position] + sum(position + 1);
};

console.log('v1', sum(0));

const sum2 = (arr: number[]): number => {
  if (!arr.length) {
    return 0;
  }
  return arr.splice(0, 1)[0] + sum2(arr);
};

console.log('v2', sum2(arr));
