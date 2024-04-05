const express = require('express');
const app = express();
const { port, root } = require('./config.json');
const fs = require("node:fs");
const path = require("node:path");

const staticDirectory = path.join(__dirname, 'public');

// Middleware to serve static files
app.use(express.static(staticDirectory));

app.get('/', (req, res) => {
  res.header("Content-Type", "text/html");
  res.send(fs.readFileSync(root, "utf8"));
})

app.listen(port, () => {
    console.log(`Server started listening on http://localhost:${port}`);
});