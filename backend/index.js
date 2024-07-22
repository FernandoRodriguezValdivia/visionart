import express from 'express';
import AppDataSource from './src/config/db.js';
import userRoutes from './src/routes/user.routes.js';
import 'dotenv/config';
// import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use('/api/v1/users', userRoutes);

AppDataSource.initialize()
	.then(() => {
		console.log('Connected to the database!');

		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	})
	.catch((error) => console.log('Error connecting to the database:', error));
