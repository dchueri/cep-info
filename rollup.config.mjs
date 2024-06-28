export default {
  input: "./index.js",
  output: {
    file: "./dist/index.js",
    name: "getAddressinfoByCEP",
    format: "esm",
  },
  external: ["cache-manager"],
};
