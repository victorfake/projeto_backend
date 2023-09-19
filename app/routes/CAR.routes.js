module.exports = app => {
    const garage = require("../controllers/CAR.controller.js");

    var router = require("express").Router();

    router.post("/", garage.create);

    router.get("/", garage.findAll);

    router.get("/", garage.findAll);

    router.get("/:id", garage.findOne);

    router.get("/Importd", garage.findAllImportd);

    router.put("/:id", garage.update);

    router.delete("/:id", garage.delete);

    router.delete("/", garage.deleteALL);

    app.use("/api/garage", router);
};