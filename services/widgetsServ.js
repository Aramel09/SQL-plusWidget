const widgets = require("../models/widgets")
const widgetsRepo = require("../repos/widgetsRepo")

class widgetsServices {
    constructor() {
    this.widgetsRepo = new widgetsRepo()};

    async getWidgets () {
        const data = await this.widgetsRepo.getWidget();
        return data.rows
    }

    async createWidgets ({type, color, quantity}) {
        const newWidgets = new widgets(type, color, quantity);
        return await this.widgetsRepo.createUser(newWidgets)
    }

    async editWidgets ({type, color, quantity, id}) {
        return await this.widgetsRepo.editUser({type, color, quantity, id})
    }

    async deleteWidgets ( {id} ){
        return await this.widgetsRepo.deleteUser({id})
    }
}

module.exports = widgetsServices; 