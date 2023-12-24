export const parseName = (fileName) => {
  if (!/^c(\d+)-s(\d+)-n(\d+)-t(\d+)\.NC*$/.test(fileName)) {
    throw new Error("Bad file name: " + fileName);
  }
  return {
    AA: /c(\d+)/.exec(fileName)[1],
    B: /s(\d+)/.exec(fileName)[1],
    CC: /n(\d+)/.exec(fileName)[1],
    DD: /t(\d+)/.exec(fileName)[1],
  };
};
