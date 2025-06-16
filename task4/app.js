import fs from "fs";
const func = (fayl1, fayl2) => {
  fs.readFile(fayl1, "utf-8", (err, data) => {
    if (err) {
      console.log("bele bir fayl yoxdur");
    } else {
      fs.writeFile(fayl2, data, (err) => {
        if (err) {
          console.log("fayl yazilmadi");
        } else {
          console.log("ugurlu emeliyat");
        }
      });
    }
  });
};
func("./a.txt", "./a7.txt");
