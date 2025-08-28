import { cache } from "./cache.js";
import { sum } from "./utils.js";

function testCache() {
  const cacheAdd = cache(sum);
  console.log(cacheAdd(2, 3));
  console.log(cacheAdd(2, 3));
  console.log(cacheAdd(2, 3));

  console.log(cacheAdd(1, 3));
}
testCache();
