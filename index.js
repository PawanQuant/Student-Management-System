const express = require("express");
const app = express();
const path = require("path")

app.get("/", (req, res) => {{
    res.send("this is home page")
}})

app.listen(8080, () => {
    console.log("server is activated");
})