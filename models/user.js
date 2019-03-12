
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var SomeModelSchema = new Schema({
    name: String,
    lastName: String
});
var SomeModel = mongoose.model('SomeModel', SomeModelSchema);

SomeModel.findOne({}).then(result => {
    if (result) {
        console.log("Database has record")
    }
    if (!result) {
        SomeModel.create({ name: "canvas" }).then(done => {
            console.log("done")
        }).catch(err => {
            console.log("Error==>", err)
        })
    }
}).catch(err => {
    console.log("Error **==>", err)
})
