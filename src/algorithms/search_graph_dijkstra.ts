export const graph: Map<string, Record<string, number>> = new Map();
export const costs: Map<string, number> = new Map();
export const parents: Map<string, string | null> = new Map();
export const processed: Set<string> = new Set();

// v1
const start = 'book';
const finish = 'piano';
graph.set('book', { plate: 5, poster: 0 });
graph.set('plate', { guitar: 15, drum: 20 });
graph.set('poster', { guitar: 30, drum: 35 });
graph.set('guitar', { piano: 20 });
graph.set('drum', { piano: 10 });
graph.set('piano', {});

// v2
// const start = 'start';
// const finish = 'fin';
// graph.set('start', { a: 6, b: 2 });
// graph.set('a', { fin: 1 });
// graph.set('b', { a: 3, fin: 5 });
// graph.set('fin', {});

createCosts(start);

let nodeName = findLowestCost(costs);
while (nodeName !== null) {
  const neighbours = graph.get(nodeName);
  const nodeCost = costs.get(nodeName) as number;

  for (const key in neighbours) {
    if (costs.get(key) === undefined) {
      costs.set(key, neighbours[key]);
      parents.set(key, nodeName);
    }
    if ((costs.get(key) as number) > nodeCost + neighbours[key]) {
      costs.set(key, nodeCost + neighbours[key]);
      parents.set(key, nodeName);
    }
  }
  processed.add(nodeName);
  nodeName = findLowestCost(costs);
}

let parent: string | null | undefined = finish;
const finalCost = costs.get(finish);
const route: string[] = [];
while (parent !== null || parent !== undefined) {
  if (parent === null || parent === undefined) {
    break;
  }
  route.unshift(parent);

  parent = parents.get(parent);
}

console.log('route', route);
console.log('finalCost', finalCost);

function createCosts(startNodeName: string): void {
  graph.forEach((nodeVal: Record<string, number>, nodeName: string) => {
    for (const key in nodeVal) {
      if (costs.has(key)) {
        break;
      }
      costs.set(
        key,
        nodeName === startNodeName ? nodeVal[key] : Number.MAX_VALUE,
      );
      parents.set(key, nodeName === startNodeName ? startNodeName : null);
    }
  });
}

function findLowestCost(costs: Map<string, number>): string | null {
  let minValue = Number.MAX_VALUE;
  let minNodeName: string | null = null;
  for (const [key, value] of costs) {
    if ((costs.get(key) as number) < minValue && !processed.has(key)) {
      minValue = costs.get(key) as number;
      minNodeName = key;
    }
  }
  return minNodeName;
}
