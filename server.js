var express = require("express");
var path = require("path");
var http = require("http");
var app = express();

app.use(express.static(path.join(__dirname, "dist/todo")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || "3000";
app.set("port", port);

const server = http.createServer(app);

app.listen(port, () => console.log(`Running on localhost:${port}`));
