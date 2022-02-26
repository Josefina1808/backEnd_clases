const expres = require("express");
const log4js = require("log4js");

const app = expres();
log4js.configure({
  appenders: {
    consola: { type: "console" },
    file: { type: "file", filename: "error.log" },
  },
  categories: {
    default: { appenders: ["consola"], level: "all" },
    custom: { appenders: ["file"], level: "all" },
  },
});

app.get("/", (req, res) => {
  res.send(`Hello to the students, they rocks`.repeat(300));
});

app.listen(3000);
