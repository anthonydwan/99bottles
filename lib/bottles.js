import { capitalize, downTo } from "./helpers"

class Bottles {
  verse(number) {
    const bottleNumber = this.bottleNumberFor(number)
    const nextBottleNumber = this.bottleNumberFor(bottleNumber.successor())
    return (
      capitalize(`${bottleNumber}`) + ` of milk on the wall, ` +
      `${bottleNumber} of milk.\n` +
      `${bottleNumber.action()}` +
      `${nextBottleNumber} of milk on the wall.\n`
    );
  }

  bottleNumberFor(number) {
    let bottleNumberClass;
    switch (number) {
      case 0:
        bottleNumberClass = BottleNumber0;
        break;
      case 1:
        bottleNumberClass = BottleNumber1;
        break;
      default:
        bottleNumberClass = BottleNumber;
        break;
    }
    return new bottleNumberClass(number);
  }

  verses(from, to) {
    return downTo(from, to).map(x => this.verse(x)).join("\n")
  }

  song() {
    return this.verses(99, 0)
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`
  }

  successor() {
    return this.number - 1
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around, `
  }

  quantity() {
    return this.number.toString()
  }

  pronoun() {
    return 'one'
  }

  container() {
    return 'bottles'
  }
}

class BottleNumber0 extends BottleNumber {
  quantity() {
    return "no more"
  }
  action() {
    return 'Go to the store and buy some more, '
  }

  successor() {
    return 99
  }
}

class BottleNumber1 extends BottleNumber {
  pronoun() {
    return 'it'
  }
  container() {
    return 'bottle'
  }

}

export { Bottles };