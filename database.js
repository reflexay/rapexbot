var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect(process.env.database, {
    useMongoClient: true
}, (err) => {
    if (err) return console.log("Erro ao conectar no database!");
    console.log("Conectado ao BANCO DE DADOS!");
})
    var Staff = new Schema({
        _id: {
            type: String
        },
        pontos: {
            type: Number,
            default: 0,
        }
    })


var Staffs = mongoose.model("Staffs", Staff);
exports.Staffs = Staffs