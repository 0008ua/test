export class BinarySearch {
  min: number;
  max: number;
  iterations = 0;
  position = 0;

  constructor(private arr: number[]) {
    this.min = 0;
    this.max = arr.length - 1;
  }

  private getMiddle(): number {
    return Math.round(this.min + (this.max - this.min) / 2);
  }

  private iterate(value: number): number | null {
    const checkingValue = this.arr[this.getMiddle()];
    console.log('checkingValue', checkingValue);
    this.iterations += 1;
    this.position = this.getMiddle();
    if (checkingValue === value) {
      console.log('found');
      return value;
    }
    if (checkingValue > value) {
      this.max = this.getMiddle();
    }
    if (checkingValue < value) {
      this.min = this.getMiddle();
    }
    console.log('min-', this.min, ' max-', this.max);
    if (this.max === this.min) {
      return null;
    }
    return this.iterate(value);
  }

  search(
    value: number,
  ): { value: number; iterations: number; position: number } | null {
    this.iterations = 0;
    const result = this.iterate(value);
    if (result) {
      return { value, iterations: this.iterations, position: this.position };
    }
    return null;
  }
}

export const arr: number[] = [
  0, 1, 2, 3, 4, 5, 6, 7, 7.5, 8, 9, 10, 11, 12, 13, 14, 15, 16,
];

const binarySearch = new BinarySearch(arr);
console.log('result', binarySearch.search(116));
