class Bottles {
  verse(num) {
    switch (num) {
      case 0:
        return (
          'No more bottles of milk on the wall, ' +
          'no more bottles of milk.\n' +
          'Go to the store and buy some more, ' +
          '99 bottles of milk on the wall.\n'
        );
      case 1:
        return (
          `${num} ${this.container(num)} of milk on the wall, ` +
          `${num} ${this.container(num)} of milk.\n` +
          `Take ${this.pronoun(num)} down and pass it around, ` +
          `no more ${this.container(num-1)} of milk on the wall.\n`
        );
      default:
        return (
          `${num} ${this.container(num)} of milk on the wall, ` +
          `${num} ${this.container(num)} of milk.\n` +
          `Take ${this.pronoun(num)} down and pass it around, ` +
          `${num - 1} ${this.container(num-1)} of milk on the wall.\n`
        );
    }
  }

  pronoun(number){
    return number ===1 ? 'it' : 'one'
  }

  container(number) {
    return number ===1 ? 'bottle' : 'bottles'
  }

  verses(from, to) {
    return this.downTo(from, to).map(x => this.verse(x)).join("\n")
  }

  downTo(from, to) {
    let nums = []
    for (let i = from; i >= to; i--) {
      nums.push(i)
    }
    return nums
  }

  song() {
    return this.verses(99, 0)
  }
}




export { Bottles };