// https://refactoring.guru/design-patterns/composite
// Composite is a structural design pattern that lets you compose objects into tree structures
// and then work with these structures as if they were individual objects.

export interface Node {
  name: string;
  add(node: Node): void;
  remove(node: Node): void;
  display(): string;
}

class Doc implements Node {
  constructor(public name: string) {}
  add(node: Node): void {
    throw new Error('Can not add.');
  }
  remove(node: Node): void {
    throw new Error('Can not remove.');
  }
  display(): string {
    return `Document name: ${this.name}`;
  }
}

class Folder implements Node {
  private nodes: Node[] = [];
  constructor(public name: string) {}
  add(node: Node): void {
    this.nodes.push(node);
  }
  remove(node: Node): void {
    this.nodes.filter((_node) => node !== _node);
  }

  display(): string {
    return `Folder name: ${this.name} contains: \n${this.nodes
      .map((_node) => _node.display())
      .join('\n')}`;
  }
}

const doc1 = new Doc('Doc 1');
const doc2 = new Doc('Doc 2');
const doc3 = new Doc('Doc 3');

const folder1 = new Folder('Folder 1');
const folder2 = new Folder('Folder 2');

folder1.add(doc1);
folder1.add(folder2);
folder2.add(doc2);
folder2.add(doc3);

console.log(folder1.display());
