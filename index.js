require("dotenv").config()
const envr = process.env.NODE_ENV || "development"

const faker = require("faker")
const express = require("express")

const app = express()

app.get("/", (req, res) => res.send(faker.name.findName()))

app.listen(process.env.PORT, console.log("working on port 3333"))