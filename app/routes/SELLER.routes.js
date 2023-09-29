module.exports = app => {
    const employees = require("../controllers/SELLER.controller.js");

    var router = require("express").Router();

    router.post("/", employees.create);

    router.get("/findname/:name", employees.findOneNames);

    router.get("/:id", employees.findOneID);

    router.get("/Remuneration", employees.findAllRemuneration);

    router.put("/:id", employees.update);

    router.delete("/:id", employees.delete);

    router.delete("/deleteall", employees.deleteAll);

    app.use("/api/employees", router);
};