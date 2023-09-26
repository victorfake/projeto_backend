module.exports = app => {
    const employee = require("../controllers/SELLER.controller.js");

    var router = require("express").Router();

    router.post("/", employee.create);

    router.get("/find/:name", employee.findOneNames);

    router.get("/find/email", employee.findAllEmail);

    router.get("/:id", employee.findOne);

    router.get("/Remuneration", employee.findAllRemuneration);

    router.put("/:id", employee.update);

    router.delete("/:id", employee.delete);

    router.delete("/", employee.deleteAll);

    app.use("/api/employee", router);
};