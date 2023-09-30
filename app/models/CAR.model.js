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
        year: {
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
    });

    return Car;
};