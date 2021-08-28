class Bottles{
  constructor(){
  }

  verse(num){
    return `${num} bottles of milk on the wall, ` +
    `${num} bottles of milk.\n` +
    'Take one down and pass it around, ' +
    `${num-1} bottles of milk on the wall.\n`;
  }
}

export {Bottles};