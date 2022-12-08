const express = require("express")
const app = express();

const widgetsRouter = require("./routes/widgetsRouter")

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const { v4: uuidv4 } = require('uuid');

const port = 3000

app.use(widgetsRouter);

app.get("/", (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log(`We are up an running in port ${port}`)
})