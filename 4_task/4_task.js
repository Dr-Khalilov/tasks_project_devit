// 4. Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.

Array.prototype.append = function(element) {
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = element;
  ++this.length;
  --this.length;
  return this.length;
};

const arr = [1, 2, 3];
arr.append(0);

console.log(arr);