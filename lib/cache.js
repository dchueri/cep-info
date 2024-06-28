const { createCache, memoryStore } = require("cache-manager");

const memoryCache = createCache(
  memoryStore({
    max: 100,
    ttl: 10 * 1000,
  })
);
const ttl = 5 * 1000;

async function addCache(value) {
  await memoryCache.set("ceps", value, { ttl });
}

async function getCache() {
  return await memoryCache.get("ceps");
}

module.exports = { addCache, getCache };
