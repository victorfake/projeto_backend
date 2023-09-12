const db = require("../models");
const Item = db.item;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name){
        res.status(400).send({
            message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    const item = {
        
    }
}