import { capitalize, downTo } from "./helpers"

class Bottles {
  verse(number) {
    const bottleNumber = new BottleNumber(number)
    const nextBottleNumber = new BottleNumber(bottleNumber.successor())
    return (
      capitalize(`${bottleNumber}`) + ` of milk on the wall, ` +
      `${bottleNumber} of milk.\n` +
      bottleNumber.action() +
      `${nextBottleNumber} of milk on the wall.\n`
    );
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
    return this.number === 0 ? 99 : this.number - 1
  }

  action() {
    return this.number === 0 ?
      'Go to the store and buy some more, ' : `Take ${this.pronoun()} down and pass it around, `
  }

  quantity() {
    return this.number === 0 ? "no more" : this.number.toString()
  }

  pronoun() {
    return this.number === 1 ? 'it' : 'one'
  }

  container() {
    return this.number === 1 ? 'bottle' : 'bottles'
  }
}

export { Bottles };