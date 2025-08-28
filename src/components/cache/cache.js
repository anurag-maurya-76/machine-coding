export function cache(fn) {
  const cacheMap = new Map();
  return function (...args) {
    let key = JSON.stringify(args);
    if (cacheMap.has(key)) {
      console.log("Fetch from cache");
      return cacheMap.get(key);
    } else {
      const output = fn.apply(this, args);
      cacheMap.set(key, output);
      return output;
    }
  };
}
