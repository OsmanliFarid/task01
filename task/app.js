import fs from "fs";
const data2 = "ferid";
let data3 = "";
for (let i = 0; i < data2.length; i++) {
  data3 += data2[i].charCodeAt(0);
}
fs.writeFile("./a1.txt", data3, (err, data3) => {
  if (err) {
    console.log("404");
  } else {
    console.log("ugurlu");
  }
});
