module.exports = (sequelize, Sequelize) => {
    const Seller = sequelize.define("employees", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        number: {
            type: Sequelize.INTEGER
        },
        salary: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        Remuneration: {
            type: Sequelize.BOOLEAN,
            allowNull: false 
        }
       
    });

    return Seller;
}