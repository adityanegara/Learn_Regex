const string = `The fat cat ran down the street. It was searching for a mouse to Eat.`;
const regex = /[fc]at/g;
const isExisting = string.match(regex);
console.log(isExisting);
