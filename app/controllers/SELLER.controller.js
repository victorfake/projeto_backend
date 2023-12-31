const db = require("../models");
const Seller = db.employees;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    const employees = {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        salary: req.body.salary,
        Remuneration: req.body.Remuneration ? req.body.Remuneration : false
    };

    Seller.create(employees)

    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Alguem erro ocorreu ao tentar registra o funcionario."
        });
    });
};

exports.findOneNames = (req, res) =>{
    const name = req.params.name;

    Seller.findOne({ where: {name} })
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(400).send({
                message: `Não foi possivel encontra o funcionario com o nome ${name}.`
            });
        };
    })

        .catch(err => {
            res.status(500).send({
                message: "Algum erro ocorreu ao tentar encontra o registro de funcionario com o nome " + name
            })
        })
};

exports.findOneId = (req, res) =>{
    const id = req.params.id;

    Seller.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(400).send({
                message: `Não foi possivel encontra o funcionario com o id=${id}.`
            });
        };
    })

        .catch(err => {
            res.status(500).send({
                message: "Algum erro ocorreu ao tentar encontra o registro de funcionario com o id=" + id
            })
        })
};

exports.update = (req, res) => {
    const id = req.params.id;

    Seller.update(req.body, {
        where: { id : id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "O registro do funcionario foi atalizado."
        });
     } else {
         res.send({
             message: `Não foi possivel atalizar o registro do funcionario com o id+${id}.`
            });
         }
    })
    .catch(err => {
        res.status(500).send({
            message: "Algum erro ocorreu ao tentar atalizar o registro de funcionario com o id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Seller.destroy({
        where: { id : id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "O resgistro do funcionario foi apagado com sucesso."
        });
    } else {
        res.send({
                message: `Não foi possivel apgar o registro do funcionario com o id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Algum erro ocorreu ao tentar apagar o registro de funcionario com o id=" + id
        });
    });
};

exports.deleteAll = (req, res) => {
    Seller.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({message: `${nums} Resgistros de funcionario foram apagados com sucesso.`});
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algum erro ao tentar apagar todos os registros de Funcionarios."
        });
    });
};

exports.findAllRemuneration = (req, res) =>{
    Seller.findAll( { where: {Remuneration: true} } )
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
        err.message || "Algum erro ocorreu ao tentar pesquisar os registro dos funcionarios Remunerados."
        });
    });

    exports.findOneAndCars = (res, req) =>{
        const id = req.params.id;

    Seller.findByPk(id, {include: 'cars'})
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(400).send({
                message: `Não foi possivel encontra o veiculos com o id=${id}.`
            });
        };
    })

        .catch(err => {
            res.status(500).send({
                message: "Algum erro ocorreu ao tentar encontra o registro do veiculo com o id=" + id
            })
        })
};

exports.findAllAndCars = (res, req) => {

    Seller.findAll({
        include: 'cars'
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algum erro ao tentar pesquisar o vendedor do veiculo"
        })
    })
}
};