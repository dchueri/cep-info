export default {
  input: "./index.js",
  output: {
    file: "./dist/index.js",
    name: "getNeighborhoodByCEP",
    format: "esm",
  },
  external: ["ffi-napi"],
};
