import * as express from "express";
import * as bodyParser from 'body-parser';
import routes from "./src/routes/crmRoutes";
import connection from './conn'
require('dotenv').config()

const app = express();
const PORT = 5000;

connection();

//bodyParse setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


routes(app);

app.get('/',(req,res) => {
  res.send(`Node & Express running on port ${PORT} with typescript`)
})

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);