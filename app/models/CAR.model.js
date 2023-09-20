module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define("garage", {
        brand: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        Year: {
            type: Sequelize.INTEGER
        },
        vaule: {
            type: Sequelize.DOUBLE
        },
        Importd: {
            type: Sequelize.BOOLEAN
        }
    });

    return Car;
};