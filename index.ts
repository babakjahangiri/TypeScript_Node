import * as express from "express";
import * as bodyParser from 'body-parser';
import routes from "./src/routes/crmRoutes";
import connection from './conn';
import messenger from './src/controllers/createMessage';
require('dotenv').config();

const app = express();
const PORT: number= 5000;
let messages = new messenger(PORT);

connection();

//bodyParse setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);


app.get('/',(req,res) => {
  res.send(messages.showMessage())
})

app.listen(PORT, () =>
  console.log(messages.showMessage())
);