const ffi = require('ffi-napi');

const libPath = './libceps.so';

const getNeighborhoodByCEP = ffi.Library(libPath, {
  'get_cep_info': ['string', ['string']]
}).get_cep_info;

export { getNeighborhoodByCEP };
