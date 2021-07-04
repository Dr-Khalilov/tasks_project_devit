// 12. Создать функцию которая создает объект на основании двух представленных массивов
// используя один как ключи, а другой как значения. Не подходящие ключи массивов должны быть исключены.
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com",
  true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

const arrayCombine = (arr1, arr2) => {
  const obj = {};
  arr1.forEach((key, index) => {
    if (typeof key !== "boolean" && typeof key !== "undefined") {
      obj[key] = arr2[index];
    }
  });
  return obj;
};

console.log(arrayCombine(testData, testData2));