// 8. Сделать функцию которая обрезает массив до указанного значения.
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

const arraySkipUntil = (arr, value) => {
  for (let i = 0, length = arr.length; i < length; i++) {
    if (value === arr[i]) {
      arr = arr.slice(i);
    }
  }
  return arr;
};

console.log(arraySkipUntil(testData, 2));
console.log(arraySkipUntil(testData, "Rafshan"));
