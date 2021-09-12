import { capitalize, downTo } from './helpers';

class Bottles {
  verse(number) {
    const bottleNumber = BottleNumber.for(number);
    return (
      capitalize(`${bottleNumber}`) +
      ' of milk on the wall, ' +
      `${bottleNumber} of milk.\n` +
      `${bottleNumber.action()}` +
      `${bottleNumber.successor()} of milk on the wall.\n`
    );
  }

  verses(from, to) {
    return downTo(from, to)
      .map((x) => this.verse(x))
      .join('\n');
  }

  song() {
    return this.verses(99, 0);
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  static register(candidate) {
    BottleNumber.registry.unshift(candidate);
  }

  static for(number) {
    const bottleNumberClass = BottleNumber.registry.find((candidate) =>
      candidate.canHandle(number)
    );
    return new bottleNumberClass(number);
  }

  static canHandle(number) {
    return true;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }

  successor() {
    return BottleNumber.for(this.number - 1);
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around, `;
  }

  quantity() {
    return this.number.toString();
  }

  pronoun() {
    return 'one';
  }

  container() {
    return 'bottles';
  }
}

BottleNumber.registry = [BottleNumber];

class BottleNumber0 extends BottleNumber {
  static canHandle(number) {
    return number === 0;
  }

  quantity() {
    return 'no more';
  }
  action() {
    return 'Go to the store and buy some more, ';
  }

  successor() {
    return BottleNumber.for(99);
  }
}

BottleNumber.register(BottleNumber0);

class BottleNumber1 extends BottleNumber {
  static canHandle(number) {
    return number === 1;
  }

  pronoun() {
    return 'it';
  }
  container() {
    return 'bottle';
  }
}

BottleNumber.register(BottleNumber1);

class BottleNumber6 extends BottleNumber {
  static canHandle(number) {
    return number === 6;
  }

  container() {
    return 'six-pack';
  }

  quantity() {
    return '1';
  }
}

BottleNumber.register(BottleNumber6);

export { Bottles };
