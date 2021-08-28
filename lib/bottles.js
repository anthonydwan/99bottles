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
          '1 bottle of milk on the wall, ' +
          '1 bottle of milk.\n' +
          'Take it down and pass it around, ' +
          'no more bottles of milk on the wall.\n'
        );
      case 2:
        return (
          '2 bottles of milk on the wall, ' +
          '2 bottles of milk.\n' +
          'Take one down and pass it around, ' +
          '1 bottle of milk on the wall.\n'         
        );
      default:
        return (
          `${num} bottles of milk on the wall, ` +
          `${num} bottles of milk.\n` +
          'Take one down and pass it around, ' +
          `${num-1} bottles of milk on the wall.\n`           
        )
    }
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