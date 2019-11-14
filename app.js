const express = require ('express')
const morgan = require("morgan");
const app = express();
const layout = require("./views/layout")
const models = require("./models/index")
const { db } = require("./models");
const wikiRouter = require('./Routes/wiki')
const userRouter = require('./Routes/user')

app.use(express.static(__dirname + "./public"));
app.use(express.urlencoded({ extended: false }));

app.use('/wiki', wikiRouter)

app.use('/user', userRouter)

//app.use('/posts', router)
db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.get('/', (req, res) => {
  res.redirect('/wiki');
})

app.get("/", (req, res) => {
    res.send(layout(""));
  })

app.use('/wiki', wikiRouter)
app.use('/user', userRouter)


const PORT = 5334

const makeTables = async () => {
    await models.db.sync({force: true})
app.listen(PORT, () =>{
    console.log("WURKING")
})

}

makeTables()




