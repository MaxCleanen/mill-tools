import * as fs from "fs";
import * as path from "path";
import { shakeFileNames } from "./utils/shakeFileNames";
import { sortIntoSeries } from "./utils/sortIntoSeries";
import { sortIntoTurns } from "./utils/sortIntoOddsEvens";

const inputFilePath = path.join(__dirname, "..", "input");
const outputFilePath = path.join(__dirname, "..", "output");

fs.readdir(inputFilePath, (err, files) => {
  if (err) {
    console.log("ERROR: ", JSON.stringify(err));
  } else {
    const series = sortIntoSeries(files);

    let batchNum = 1;
    for (const [_, groupFiles] of Object.entries<string[]>(series)) {
      const { fileNamesMap, lastBatchName } = shakeFileNames(
        groupFiles,
        batchNum,
        "e1"
      );
      batchNum = lastBatchName + 1;

      fs.mkdir(outputFilePath, { recursive: true }, () => {});

      for (const [oldFileName, newFileName] of Object.entries<string>(
        fileNamesMap
      )) {
        fs.readFile(
          path.join(inputFilePath, oldFileName),
          { encoding: "utf-8" },
          function (readFileErr, data) {
            if (!readFileErr) {
              const fileContent = data;
              fs.writeFile(
                path.join(outputFilePath, newFileName),
                fileContent,
                (writeFileErr) => {
                  if (writeFileErr) {
                    throw writeFileErr;
                  }
                }
              );
            }
          }
        );
      }
    }
  }
});
