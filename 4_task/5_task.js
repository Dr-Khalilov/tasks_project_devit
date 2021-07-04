// 5. Выведите все элементы массива используя рекурсию.
const arr = ["Solnce", "vishlo", "iz", "za", "tuchi"];

function recurseLog(array) {
  console.log(array.shift());
  if (array.length !== 0) {
    recurseLog(array);
  }
}

recurseLog(arr);