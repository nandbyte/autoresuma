//importing dependencies

import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';

import { CommonRoutesConfig } from './common/common.routes.config';
import { UserRoutes } from './routes/users.routes.config';
import { EducationRoutes } from './routes/education.routes.config';


import debug from 'debug';
import { sequelize } from './config/db.config';



//variable declaration

const app:express.Application = express();

const server: http.Server = http.createServer(app);

const port = process.env.PORT||3000;

const routes: Array<CommonRoutesConfig> = [];

const debugLog: debug.IDebugger = debug('app');

//db initalize
/*
sequelize.sync().
then(()=>{
	console.log("connection done");
})
.catch(e=> console.log("error in connecting to db "+e));
*/

//db init
async function  dbInit(){
	try{
		console.log("Inside db init");
		await sequelize.sync();
		console.log("db connection established");
	}
	catch(e){
		console.log("error in db connection , error " + e);
	}
}


//here we are adding middleware to parse all incoming requests as JSON

app.use(express.json());

//here we are adding middleware to allow cross-origin requests

app.use(cors());

//here we are preparing the expressWinston logging middleware
//configurationo
//which will automatically log all HTTP requests handled by Express.js

const loggerOption: expressWinston.LoggerOptions = {

	transports: [new winston.transports.Console()],
	format: winston.format.combine(
		winston.format.json(),
		winston.format.prettyPrint(),
		winston.format.colorize({all: true})
	),
};


if(!process.env.DEBUG){
	loggerOption.meta = false; // when not debugging , log requests as one liners
}

// initializes the logger with above configuration

app.use(expressWinston.logger(loggerOption));

//here we are adding the UserRoutes to our array,
//after sending the express.js application object to have the routes
// added to our app

routes.push(new UserRoutes(app));
routes.push(new EducationRoutes(app));


//this is a simple route to make sure everything is working properly

const runningMessage = 'Serving running at http://localhost: ' + port;

app.get('/',(req: express.Request, res: express.Response)=>{
	res.status(200).send(runningMessage);
});


server.listen(port,()=>{

	try{
	dbInit();
	routes.forEach((route: CommonRoutesConfig)=>{
		debugLog("Route configured for ${route.getName()}");
	});
	//our only exception to avoiding console.log() , because we
	// always want to know when server is done starting up

	console.log(runningMessage);
	}
	catch(e){
		console.log(e);
	}
})
