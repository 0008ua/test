export class SortSelect {
  constructor() {}
  sort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
      let minElIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[minElIndex] > arr[j]) {
          minElIndex = j;
        }
      }
      const temp = arr[i];
      arr[i] = arr[minElIndex];
      arr[minElIndex] = temp;
    }
    return arr;
  }
}

const array = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
const sortSelect = new SortSelect();

console.log(sortSelect.sort(array));
