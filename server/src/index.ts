import express from 'express';
const app = express();
const port = 3000;
import { Sequelize,sequelize } from './config/db.config';
import bodyparser from "body-parser";




sequelize.sync().then(()=>{
	app.listen(port,()=>{
		console.log("App running");
	})
});
