class Bottles {
  constructor() {
  }

  #countBottle(num) {
    return (num > 1 || num === 0) ? "bottles" : 'bottle'
  }

  #postNumber(num, line) {
    if (num > 0) {
      return num
    } else if (line === "first") {
      return "No more"
    } else {
      return "no more"
    }
  }

  #thirdLine(num) {
    if (num > 1) {
      return 'Take one down and pass it around, '
    } else if (num === 1) {
      return 'Take it down and pass it around, '
    } else {
      return 'Go to the store and buy some more, '
    }
  }

  #resetNumber(num) {
    return num >= 0 ? num : 99
  }

  verse(num) {
    return `${this.#postNumber(num, "first")} ${this.#countBottle(num)} of milk on the wall, ` +
      `${this.#postNumber(num, "second")} ${this.#countBottle(num)} of milk.\n` +
      this.#thirdLine(num) +
      `${this.#postNumber(this.#resetNumber(num - 1), "last")} ${this.#countBottle(this.#resetNumber(num - 1))} of milk on the wall.\n`;
  }

  verses(from, to){
    let text = ""
    text += this.verse(from)
    if (from > to){
      for (let i = from-1; i > to-1;i--){
        text += '\n'
        text += this.verse(i)
      }
    }
    return text
  }

  song(){
    return this.verses(99,0)
  }
}




export { Bottles };