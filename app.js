const express = require ('express')
const morgan = require("morgan");
const app = express();
const layout = require("./views/layout.js")
const models = require("./models/index.js")
app.use(express.urlencoded({ extended: false }));
const { db } = require("./models");

app.use(express.static(__dirname + "./public"));


//app.use('/posts', router)
db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.get("/", (req, res) => {
    res.send(layout(""));
  })


const PORT = 5334

const makeTables = async () => {
    await models.db.sync({force: true})
app.listen(PORT, () =>{
    console.log("WURKING")
})

}

makeTables()




