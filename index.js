require("dotenv").config()
const envr = process.env.NODE_ENV || "development"
const PORT = process.env.PORT
const express = require("express")

const app = express()

app.get("/", (req, res) => res.send("Check your db"))

app.listen(PORT, console.log(`working on port ${PORT}`))