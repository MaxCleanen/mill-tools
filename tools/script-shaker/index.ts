import * as fs from "fs";
import * as path from "path";
import { shakeFileNames } from "./utils/shakeFileNames";
import { sortIntoSeries } from "./utils/sortIntoSeries";
import { sortIntoTurns } from "./utils/sortIntoOddsEvens";

const inputFilePath = path.join(__dirname, "..", "input");
const outputFolderPath = path.join(__dirname, "..", "output");

fs.readdir(inputFilePath, (err, files) => {
  if (err) {
    console.log("ERROR: ", JSON.stringify(err));
  } else {
    const turns = sortIntoTurns(files);
    for (const [oddEvenKey, oddEvenGroupFiles] of Object.entries<string[]>(
      turns
    )) {
      const series = sortIntoSeries(oddEvenGroupFiles);

      let batchNum = 1;
      for (const [_, groupFiles] of Object.entries<string[]>(series)) {
        const { fileNamesMap, lastBatchName } = shakeFileNames(
          groupFiles,
          batchNum,
          oddEvenKey + "1"
        );
        batchNum = lastBatchName + 1;

        fs.rmSync(outputFolderPath, { recursive: true, force: true });

        fs.mkdir(outputFolderPath, { recursive: true }, () => {});

        for (const [oldFileName, newFileName] of Object.entries<string>(
          fileNamesMap
        )) {
          fs.readFile(
            path.join(inputFilePath, oldFileName),
            { encoding: "utf-8" },
            function (readFileErr, data) {
              if (!readFileErr) {
                const fileContent = data;

                fs.mkdir(
                  path.join(outputFolderPath, oddEvenKey + "1"),
                  { recursive: true },
                  () => {}
                );

                fs.writeFile(
                  path.join(outputFolderPath, oddEvenKey + "1", newFileName),
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
  }
});
