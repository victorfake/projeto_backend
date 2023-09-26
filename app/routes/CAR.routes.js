module.exports = app => {
    const cars = require("../controllers/CAR.controller.js");

    var router = require("express").Router();

    router.post("/", cars.create);

    router.get("/", cars.findAll);

    router.get("/", cars.findAll);

    router.get("/:id", cars.findOne);

    router.get("/Importd", cars.findAllImportd);

    router.put("/:id", cars.update);

    router.delete("/:id", cars.delete);

    router.delete("/", cars.deleteALL);

    app.use("/api/cars", router);
};