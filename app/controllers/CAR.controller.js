const db = require("../models");
const Item = db.garage;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.brand) {
        res.status(400).send({
            message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    const garage = {
        brand: req.body.brand, //variavel para a marcar do carro ex:Fiat
        model: req.body.model, //variavel para o modelo do carro ex:Uno
        Year: req.body.Year, //variavel pra o ano de fabricação do carro ex:2000
        vaule: req.body.vaule, //variavel para o preço do carro ex: $300000.00
        Importd: req.body.Importd ? req.body.Importd : false //variavel para informar se o carro e impordo ou não
    };

    Item.create(garage)

    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algum erro ocorreu ao tentar criar item."
        });
    });
};

exports.findAll = (req, res) =>{
    const brand = req.query.brand;
    var condition = brand ? { brand: { [Op.iLike]: `%${brand}` } } : null;

    Item.findALl({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu ao tentar pesquisar as marcas de veiculos"
            });
        });
};

exports.findAll = (req, res) =>{
    const model = req.query.model;
    var condition = model ? { brand: { [Op.iLike]: `%${model}` } } : null;

    Item.findALl({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu ao tentar pesquisar os modelos de veiculos"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Item.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Não foi possível encontrar o veiculo com o id=${id}.` 
            });
        };
    })
        .catch(err => {
            res.status(500).send({
                message: "Algum erro ocorreu ao tentar encontrar o veiculo com o id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Item.update(req.body, {
        where: { id : id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "O veiculo foi atalizado."
            });
        } else {
            res.send({
                message: `Não foi possivel atalizar o veiculo com o id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Algum erro ocorreu ao tentar atalizar o veiculo com o id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Item.destroy({
        where: { id: id }
    })
    .then(num => {
        if  (num == 1) {
            res.send({
                message: "O item foi apagado com sucesso."
            });
        } else {
            res.send({
                message: `Não foi possivel apagar o item com o id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Algum erro ocorreu ao tentar apagar o veiculo com o id=" + id
        });
    });
};

exports.deleteALL = (req, res) => {
    Item.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({message: `${nums} Veiculos foram apagados com sucesso.` });
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algum erro ocorreu ao tentar apagar todos os veiculos."
        });
    });
};

exports.findAllImportd = (req, res) => {
    Item.findAll({ where: {Importd: true} } )
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algum erro ocorreu ao tentar pesquisar todos os veiculos Importd. "
        });
    });
};