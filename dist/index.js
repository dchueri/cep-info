const ffi = require("ffi-napi");
const path = require("path");

const libPath = path.resolve(__dirname, "./libceps.so");
const filePath = path.resolve(__dirname, "./ceps.csv");

const func = ffi.Library(libPath, {
  get_cep_info: ["string", ["string", "string"]],
}).get_cep_info;

const getNeighborhoodByCEP = (cep) => func(cep, filePath);

module.exports = { getNeighborhoodByCEP };
