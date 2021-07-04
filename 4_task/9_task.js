// 9. Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.
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

//Не до конца получилось написать функцию
const arrayNormalize = (arr, type, transform = false) => {
  return arr.filter((item) => {
    if (typeof type === "string" && transform === true) {
      return typeof item === "string";
    } else if (typeof type === "number") {
      return typeof item === "number";
    } else if (typeof type === "boolean") {
      return typeof item === "boolean";
    } else if (typeof type === "function") {
      return typeof item === "function";
    } else if (Array.isArray(type)) {
      return item;
    } else {
      return typeof item === "object";
    }
  });
};

console.log(arrayNormalize(testData4, "string"));