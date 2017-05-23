// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Burger model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers/", function(req, res) {
    db.Burger.findAll({})
    .then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // POST route for saving a new burger
  app.post("/", function(req, res) {
    console.log(req);
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    })
    .then(function(dbBurger) {
      res.redirect("/");
    });
  });

  // DELETE route for deleting burgers
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // PUT route for updating burgers
  app.put("/api/burgers", function(req, res) {
    db.Burger.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
};
