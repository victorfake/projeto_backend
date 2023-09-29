module.exports = app => {
    const cars = require("../controllers/CAR.controller.js");

    var router = require("express").Router();

    router.post("/", cars.create);

    router.get("/findmodel/:model", cars.findOneModel);

    router.get("/:id", cars.findOne);

    router.get("/find/Importd", cars.findAllImportd);

    router.put("/:id", cars.update);

    router.delete("/:id", cars.delete);

    router.delete("/delete/all", cars.deleteALL);

    app.use("/api/cars", router);
};