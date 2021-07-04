// 6. Написать функцию для выполнения параллельных вычислений без использования Promise.
const a = function(one, two) {
  return one + two;
};
const b = function() {
  return false;
};

const parallel = (param, param2, cb) => {
  setTimeout(() => {
    cb(param, param2);
  }, 0);
};

parallel(a(1, 3), b(), console.log);