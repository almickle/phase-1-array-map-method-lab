const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// const titleCased = () => tutorials.map(element => element.replace(element[0], element[0].toUpperCase()))

//console.log(titleCased())

const titleCased = () => capArray.map(i=>i.join(" "))

const splitArray = tutorials.map(element => element.split(" "))
const capArray = splitArray.map(i=>i.map(i=>i.replace(i[0],i[0].toUpperCase())))

console.log(capArray.map(i=>i.join(" ")))

// console.log(splitArray.map(i=>i.map(i=>i.replace(i[0],i[0].toUpperCase()))))

// console.log(splitArray[0].map(element => element.replace(element[0], element[0].toUpperCase())))