export abstract class Animal {
  abstract name: string;
  greeting = '';
  say():void {
    this.greeting = 'It\'s ' + this.name;
  }
}
