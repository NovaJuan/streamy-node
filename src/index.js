import '@babel/polyfill';

import app from './app';

const server = app.listen(
	app.get('port'),
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${app.get('port')}`
	)
);

//handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`.red);

	//Close server and exit
	server.close(() => process.exit(1));
});
