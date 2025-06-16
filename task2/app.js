import fs from "fs";
let mesaj = "";
for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    mesaj += " " + `${i} x ${j} = ${i * j}`;
    console.log(mesaj);
  }
}
fs.writeFile("./a.txt", mesaj, (err, data) => {
  if (err) {
    console.log("ugursuz emeliyat");
  } else {
    console.log("ugurlu emeliyat");
  }
});
