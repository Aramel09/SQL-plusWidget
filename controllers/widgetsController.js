const widgetsServices = require("../services/widgetsServ")

class widgetsController {
    constructor () {
        this.widgetsServices = new widgetsServices();
    }

    async getWidgets (req, res){
        try{
            const info = await this.widgetsServices.getWidgets();
            res.send(info);
        }
        catch (e) {
            console.log(e)
            res.status(500).send("Error! You made a mistake")
        }
    }

    async createWidgets (req, res) {
        try{
            const content = req.body
            await this.widgetsServices.createWidgets(content)
            res.status(200).send("Widget created, you are doing awesome!")
        }
        catch (e) {
            console.log(e)
            res.status(500).send("Error! You made a mistake")
        }
    }

    async editWidgets (req, res, widgetId) {
        try{
            const content = ({...req.body, id: widgetId })
            await this.widgetsServices.editWidgets(content)
            res.status(200).send("Widget edited, don't get to crazy!")
        }
        catch (e) {
            console.log(e)
            res.status(500).send("Error! You made a mistake")
        }
    }

    async deleteWidget (req, res, widgetId) {
        try{
            const content =  {id: widgetId}
            await this.widgetsServices.deleteWidgets(content)
            res.status(200).send("Widget eliminated")
        }
        catch (e) {
            console.log(e)
            res.status(500).send("Error! You made a mistake")
        }
    }
}

module.exports = widgetsController