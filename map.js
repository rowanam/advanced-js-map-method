
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// My code, before starting the lesson
let tenNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tenSquares = tenNums.map(num => num ** 2);
console.log(tenSquares);

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);

// Using map()
const multByTwo = function (num) {
  return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2 });
console.log(simplified);

// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// Goal: iterate through students, for each, return array containing name and id
// Can be done in a single line of code
// Put resulting arrays in an array called studentsWithIds

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

// Goal: iterature through students, for each, return an object containing id and name
// Put resulting objects in an array

const studentsObjsWithIds = students.map(student => ({ id: student.id, name: student.name }));
console.log(studentsObjsWithIds);

// Goal: create a new array identical to the original, except where each object has an age as well

let ages = [32, 26, 28];

const studentsAddAges = students.map(student => {
  let age = ages[students.indexOf(student)];

  return {...student, age: age};
})
console.log(studentsAddAges);

// another approach
// taken from this StackOverflow post:
// https://stackoverflow.com/questions/32937181/javascript-es6-map-multiple-arrays
// How does this work though? (Where does the value for i come from?)
// --> Answer: complete syntax for the map method = arr.map(function(element, index, array){  }, this);
// --> (source: https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/)
// --> index (the index of element) gets passed to the method; assigning it i simply allows us to refer to it I suppose

const studentsAddAges2 = students.map((student, i) => ({...student, age: ages[i]}));
console.log(studentsAddAges2);