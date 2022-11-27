import express from "express";
const app = express()

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

import { v4 as uuidv4 } from 'uuid';

const port = 3000

let data = [
    {
        "id": uuidv4(),
        "type": "Bar",
        "color": "Bronze",
        "quantity": 3,
    }    
]

app.get("/", (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log(`We are up an running in port ${port}`)
})

app.post("/newWidget", (req, res) =>{
    const widgetInfo = {...req.body,  id: uuidv4()};
    data.push(widgetInfo)
    res.send(data)
})

app.put("/newWidget/:dataId", (req, res) =>{
    const DataId = req.params.dataId

    if(req.body.id){
        delete req.body.id
    }

    data = data.map((data) => {
        if(DataId === data.id){
           return {...data, ...req.body}
        }
        return data
    })

    res.send(data)

})

app.delete("Widget/:dataId", (req, res) =>{
    const DataId = req.params.id

    data = data.filter((data) => data.id !== DataId)

    res.send(data)
})