const fs = require("fs");
const path = require("path");

const getNeighborhoodByCEP = (cep) => {
  try {
    const filePath = path.resolve(__dirname, "./ceps.csv");
    const data = fs.readFileSync(filePath, "utf8");
    const lines = data.split("\n");

    for (let line of lines) {
      const fields = line.split(";");

      if (fields.length >= 4 && fields[0] === cep.replace("-", "")) {
        return fields[3];
      }
    }

    return "NOT_FOUND";
  } catch (error) {
    console.error("Error reading file:", error);
    return "FILE_NOT_FOUND";
  }
};

module.exports = { getNeighborhoodByCEP };
