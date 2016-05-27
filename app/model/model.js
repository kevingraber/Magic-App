// Pulls Mongoose dependency for creating schemas
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Creates a Playgroup Schema. This will be the basis of how playgroup data is stored in the db.
var PlaygroupSchema = new Schema({
    playgroupname: {type: String, required: true},
    formats: [{type: String, required: true}],
    location: {type: [Number], required: true}, // [Long, Lat]
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

// Sets the created_at parameter equal to the current time
PlaygroupSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

// Indexes this schema in 2dsphere format (critical for running proximity searches)
PlaygroupSchema.index({location: '2dsphere'});

// Exports the PlaygroupSchema for use elsewhere. Sets the MongoDB collection to be used as: "playgroups"
module.exports = mongoose.model('playgroup', PlaygroupSchema);