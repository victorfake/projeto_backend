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
        }
    });

    return Seller;
}