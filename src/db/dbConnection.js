const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./urlShrink.db", (err) => {
  if (err) {
    console.error(err.message);
  }
});

db.run("DROP TABLE url", function (err) {
  if (err) {
    return console.error(err.message);
  }
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
});
