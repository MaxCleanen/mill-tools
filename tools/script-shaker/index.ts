import * as fs from "fs";
import * as path from "path";
import { shakeFileNames } from "./utils/shakeFileNames";

const inputFilePath = path.join(__dirname, "..", "input");
const outputFilePath = path.join(__dirname, "..", "output");

fs.readdir(inputFilePath, (err, files) => {
  if (err) {
    console.log("ERROR: ", JSON.stringify(err));
  } else {
    const structure = shakeFileNames(files);

    fs.mkdir(outputFilePath, { recursive: true }, () => {});

    for (const [oldFileName, newFileName] of Object.entries<string>(
      structure
    )) {
      console.log(newFileName);

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
});
