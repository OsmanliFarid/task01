import fs from "fs";
const Func = (fayl) => {
  fs.readFile(fayl, (err) => {
    if (err) {
      console.log("bele bir fayl yoxdur");
    } else {
      fs.unlink(fayl, (err) => {
        if (err) {
          console.log("bele bir fayl tapilmadi");
        } else {
          console.log("ugurla silindi");
        }
      });
    }
  });
};
Func("./a.txt");
