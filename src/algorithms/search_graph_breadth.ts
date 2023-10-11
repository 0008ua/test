export const graph: Map<string, Array<string>> = new Map();
graph
  .set('you', ['alice', 'bob', 'claire'])
  .set('bob', ['ann', 'peggy'])
  .set('alice', ['peggy'])
  .set('claire', ['tom', 'john'])
  .set('ann', [])
  .set('peggy', [])
  .set('tom', [])
  .set('john', []);

// serch for name ends on 'm'
function run() {
  const queue: string[] = [];
  const uniqueHeros: Set<string> = new Set();
  queue.push(...(graph.get('you') as string[]));
  while (queue.length > 0) {
    // for (let i = 0; i < queue.length; i += 1) {
    const hero: string = queue.shift() as string;
    if (uniqueHeros.has(hero)) {
      continue;
    }
    console.log('hero', hero);
    uniqueHeros.add(hero);
    const heroFriends = graph.get(hero) as string[];
    if (hero.charAt(hero.length - 1) === 'm') {
      return hero;
    }
    queue.push(...heroFriends);
  }
  return 'not found';
}

// function run() {
//   const queue: string[] = [];
//   const uniqueHeros = new Set();
//   queue.push(...(graph.get('you') as string[]));
//   let result = 'not found';
//   for (let i = 0; i < queue.length; i += 1) {
//     const hero = queue[i];
//     if (uniqueHeros.has(hero)) {
//       continue;
//     }
//     console.log('hero', hero);
//     uniqueHeros.add(hero);
//     const heroFriends = graph.get(hero) as string[];
//     if (hero.charAt(hero.length - 1) === 'm') {
//       result = hero;
//       break;
//     }
//     queue.push(...heroFriends);
//   }

//   for (const uniqueHero of uniqueHeros.keys()) {
//     console.log(uniqueHero);
//   }

//   return result;
// }

console.log('Result', run());
