let testData4 = [{ "name": "Vasya", "email": "vasya@example.com", "age": 20 }, {
  "name": "Dima",
  "email": "dima@example.com",
  "age": 34,
},
  { "name": "Colya", "email": "colya@example.com", "age": 46 }, {
    "name": "Misha",
    "email": "misha@example.com",
    "age": 16,
  },
  { "name": "Ashan", "email": "ashan@example.com", "age": 99 }, {
    "name": "Rafshan",
    "email": "rafshan@example.com",
    "age": 11,
  },
  1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false,
  [[[[1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false,
    [{ "name": "Rafshan", "email": "rafshan@example.com", "age": 11 }]]]]]];

// 2. Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив,
// у которого есть все элементы входных массивов.
function getFoldedArray(nestedArr) {
  return nestedArr.reduce((accumulator, currentValue) =>
    accumulator.concat(Array.isArray(currentValue) ? getFoldedArray(currentValue) : currentValue), []);
}

const arr = [[0, 1], [2, 3], [4, 5], [5, 6, [2, 4, [3, 3, 3]]]];
const arrays = [[1, 2, 3], [4, 5], [6]];

console.log(getFoldedArray(arrays));
console.log(getFoldedArray(testData4));


