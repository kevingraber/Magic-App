// Dependencies
var mongoose = require('mongoose');
var Playgroup = require('../model/model.js');

// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all users in the db
    app.get('/playgroups', function(req, res){

            Playgroup.find({}, function(err, results) {
                if (err) throw err;
                res.json(results)
            })

    });

    // POST Routes
    // --------------------------------------------------------
    // Provides method for saving new playgroups in the db
    app.post('/playgroups', function(req, res){

        console.log(req.body)

        // Creates a new Playgroup based on the Mongoose schema and the post body
        var newPlaygroup = new Playgroup({
            playgroupname: req.body.playgroupname,
            formats: req.body.formats,
            location: req.body.location
        });

        // New Playgroup is saved in the db.
       newPlaygroup.save(function(err){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of the new user
            res.json(req.body);
        });
    });
};  