const array = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 7, 9, 77, -4, 8, 36, 4, 1, 7, -1,
  -5, 23, 6, 2, 35, 6, 3, 32,
];
let counter = 0;
let counter2 = 0;

export const sort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  const less: number[] = [];
  const greater: number[] = [];
  // index random
  const pivotIndex = Math.round(Math.random() * (arr.length - 1));
  for (let i = 0; i < arr.length; i++) {
    counter += 1;
    if (i === pivotIndex) {
      continue;
    }
    if (arr[i] < arr[pivotIndex]) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [...sort(less), arr[pivotIndex], ...sort(greater)];
};

export const sort2 = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  const less: number[] = [];
  const greater: number[] = [];
  // index in the middle
  const pivotIndex = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    counter2 += 1;
    if (i === pivotIndex) {
      continue;
    }
    if (arr[i] < arr[pivotIndex]) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [...sort2(less), arr[pivotIndex], ...sort2(greater)];
};

for (let i = 0; i < 1000; i += 1) {
  sort(array);
  sort2(array);
}

console.log('n', array.length); // 32
console.log('log(n)', Math.log2(array.length)); // 5
console.log('O(log(n)*n)', Math.log2(array.length) * array.length); // 160
console.log('v1 - real result', counter / 1000);  // 161 - 163
console.log('v2 - real result', counter2 / 1000); // 184
