import { capitalize, downTo } from "./helpers"

class Bottles {
  verse(num) {
      return (
        `${capitalize(this.quantity(num))} ${this.container(num)} of milk on the wall, ` +
        `${this.quantity(num)} ${this.container(num)} of milk.\n` +
        this.action(num) +
        `${this.quantity(this.successor(num))} ${this.container(this.successor(num))} of milk on the wall.\n`
      );
    }

  successor(number){
    return number ===0 ? 99 : number-1
  }

  action(number = 0) {
    return number === 0 ?
      'Go to the store and buy some more, ' : `Take ${this.pronoun(number)} down and pass it around, `
  }

  quantity(number = 0) {
    return number === 0 ? "no more" : number.toString()
  }

  pronoun(number) {
    return number === 1 ? 'it' : 'one'
  }

  container(number) {
    return number === 1 ? 'bottle' : 'bottles'
  }

  verses(from, to) {
    return downTo(from, to).map(x => this.verse(x)).join("\n")
  }

  song() {
    return this.verses(99, 0)
  }
}




export { Bottles };