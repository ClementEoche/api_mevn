module.exports = app => {
    const tasks = require("../controllers/task.controller.js");
    const { authJwt } = require("../middlewares");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/",[authJwt.verifyToken] ,tasks.create);

    // Retrieve all Tutorials
    router.get("/",[authJwt.verifyToken], tasks.findAll);

    // Retrieve all published Tutorials
    router.get("/done",[authJwt.verifyToken], tasks.findAllDone);

    // Retrieve a single Tutorial with id
    router.get("/:id",[authJwt.verifyToken], tasks.findOne);

    // Update a Tutorial with id
    router.put("/:id",[authJwt.verifyToken], tasks.update);

    // Delete a Tutorial with id
    router.delete("/:id",[authJwt.verifyToken], tasks.delete);

    // Create a new Tutorial
    router.delete("/",[authJwt.verifyToken], tasks.deleteAll);

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.use("/api/tasks", router);
};
