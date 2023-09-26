module.exports = (sequelize, Sequelize) => {
    const Seller = sequelize.define("employee", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        number: {
            type: Sequelize.INTEGER
        },
        salary: {
            type: Sequelize.DOUBLE
        },
        Remuneration: {
            type: Sequelize.BOOLEAN
        },
        id_Car: {
            type: Sequelize.INTEGER,
            references: {
                model: "cars",
                key: 'id'
            }
        }
    });

    return Seller;
}