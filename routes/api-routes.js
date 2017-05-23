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

  // GET route for getting all of the burgers if they want
  app.get("/api/burgers/", function(req, res) {
    db.Burger.findAll({})
    .then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // POST route for saving a new burger
  app.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name
    })
    .then(function(dbBurger) {
      res.redirect("/");
    });
  });

 
  // PUT route for updating burgers
  app.put("/:id", function(req, res) {
    db.Burger.update(
      {devoured:true
      },
      {
        where: {
          id: req.params.id
        }
      })
    .then(function(dbBurger) {
      res.redirect("/");
    });
  });
};
