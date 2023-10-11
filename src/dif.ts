export function solution(str: string, ending: string): boolean {
  console.log(str.slice(0));
  return ending.length ? str.slice(-ending.length) === ending : true;
}
console.log(solution('abc', ''));

// solution('abcde', 'cde'), true);
//     assert.equal(solution('abcde', 'abc'), false);
//     assert.equal(solution('abc', ''), true);
//   });
// });