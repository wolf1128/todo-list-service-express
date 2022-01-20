import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode, listening on port ${port}... `
	)
);

export default server;
