// 10. Сделать функцию которая возвращает уникальные элементы массива.

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

const arrayUnique = (arr1, arr2) => [...new Set(arr1.concat(arr2))];

console.log(arrayUnique(testData, testData2));