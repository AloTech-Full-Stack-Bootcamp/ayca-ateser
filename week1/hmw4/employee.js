const fs = require("fs");

fs.writeFile(
  "employees.json",
  '{"name": "Ayca", "salary": 5000}',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("The file has been created.");
  }
);

fs.readFile("employees.json", "utf8", (err, info) => {
  if (err) console.log(err);
  console.log(info);
  console.log("The file has been read.");
});

fs.appendFile(
  "employees.json",
  '{ "name": "Yagmur", "salary": 8000 }',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("The file has been updated.");
  }
);

fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
  console.log("The file has been deleted.");
});