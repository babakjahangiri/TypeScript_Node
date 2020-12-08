import * as express from "express";
import * as bodyParser from 'body-parser';
import routes from "./src/routes/crmRoutes";
import connection from './conn';
import messenger from './src/controllers/createMessage';
import { Settings } from './settings';

require('dotenv').config();

const app = express();
let messages = new messenger(Settings.PORT);

connection();

//bodyParse setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);


app.get('/',(req,res) => {
  res.send(messages.showMessage())
})

app.listen(Settings.PORT, () =>
  console.log(messages.showMessage())
);