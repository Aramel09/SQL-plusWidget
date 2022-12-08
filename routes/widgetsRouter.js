const express = require("express");
// import express from "express"
// import widgetsController from "../controllers/widgetsController";
const widgetsController = require("../controllers/widgetsController");

const widgetsRouter = express.Router();

const WidgetsController = new widgetsController

widgetsRouter.get("/widgets", (req, res) => WidgetsController.getWidgets(req, res))
widgetsRouter.post("/widget", (req, res) => WidgetsController.createWidgets(req, res))
widgetsRouter.put("/widget/:id", (req, res) => {
    const widgetId = req.params.id
    WidgetsController.editWidgets(req, res, widgetId)})
widgetsRouter.delete("/widget/:id", (req, res) => {
    const widgetId = req.params.id
    WidgetsController.deleteWidget(req, res, widgetId)})



module.exports = widgetsRouter
