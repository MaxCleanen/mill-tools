import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const [, , input, output, ...lineNums] = process.argv;

var inputFilePath = path.join(__dirname, input);
var outputFilePath = path.join(__dirname, output);

let fileContent = "";
fs.readFile(inputFilePath, { encoding: "utf-8" }, function (readFileErr, data) {
  if (!readFileErr) {
    const lines = data.split(/\r?\n/);

    const filteredLines = [
      `[StringExtract]`,
      ...lines
        .map((el, idx) => `n${idx + 1}=${el}`)
        .filter((_, index) => {
          return lineNums.map((x) => x - 1).indexOf(index) !== -1;
        }),
    ];
    fileContent = filteredLines.join("\r\n");
    fs.writeFile(outputFilePath, fileContent, (writeFileErr) => {
      if (writeFileErr) {
        throw writeFileErr;
      }
    });
  } else {
    throw readFileErr;
  }
});
