module.exports = (sequelize, Sequelize) => {
    const Seller = sequelize.define("employees", {
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
       
    });

    return Seller;
}