const pool = require("../utils/pools");

class WidgetsRepo{
    constructor(){}
    
    getWidget(){
        return pool.query("SELECT * FROM widgets ")
    }

    createUser ({type, color, quantity}) {
        return pool.query(
            "INSERT INTO widgets (type, color, quantity) VALUES ($1, $2, $3)",
            [type, color, quantity]
        )
    }

    editUser ({type, color, quantity, id}) {
        return pool.query(
            "UPDATE widgets set type = $1, color = $2, quantity = $3 WHERE id = $4",
            [type, color, quantity, id]
        );
    }

    deleteUser ({ id }){
        return pool.query("DELETE FROM widgets WHERE id = $1",[id])
    }
}

module.exports = WidgetsRepo