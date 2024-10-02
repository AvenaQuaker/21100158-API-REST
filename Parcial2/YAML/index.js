import fs from "fs";
import YAML from "yaml";

const file = fs.readFileSync("./Parcial2/YAML/Sintaxis.yml", "utf8");
const lectura = YAML.parse(file);
console.log(lectura);
console.table(lectura);
