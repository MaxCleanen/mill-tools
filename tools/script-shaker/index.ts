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
    // const turns = sortIntoTurns(files);
    // for (const [turnNum, turnFiles] of Object.entries<string[]>(turns)) {
    // }

    const series = sortIntoSeries(files);

    // console.log("LOGGG series", series);
    let oddCount = 0;
    let evenCount = 0;
    for (const [groupNum, groupFiles] of Object.entries<string[]>(series)) {
      const isEven = Number(groupNum) % 2 !== 0;
      //odd четный, even -- нечетный
      if (isEven) {
        evenCount++;
      } else {
        oddCount++;
      }

      const structure = shakeFileNames(
        groupFiles,
        1,
        // isEven ? "e" + evenCount : "o" + oddCount
        isEven ? "e" : "o",
        isEven ? evenCount : oddCount
      );

      fs.mkdir(outputFilePath, { recursive: true }, () => {});

      for (const [oldFileName, newFileName] of Object.entries<string>(
        structure
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
