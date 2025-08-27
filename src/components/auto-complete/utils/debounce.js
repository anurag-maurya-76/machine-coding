export function debounce(fn, delay) {
  let timeout;
  return function (...arg) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(this, arg);
    }, delay);
  };
}
