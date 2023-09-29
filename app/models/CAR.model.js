module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define("cars", {
        brand: {
            type: Sequelize.STRING,
            allowNull: false
        },
        model: {
            type: Sequelize.STRING,
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        vaule: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        Importd: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        id_Seller: {
            type: Sequelize.INTEGER,
            references: {
                model: "employees",
                key: 'id'
            }
        }
    });

    return Car;
};