// 7. Сделать функцию поиска значений в массиве.
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com",
  true, false];

const arrayFind = (arr, search) => {
  const pattern = new RegExp(search, "i");
  return arr.filter(foundItem => pattern.test(foundItem));
};

console.log(arrayFind(testData, "raf"));