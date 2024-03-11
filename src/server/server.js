import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
	host: 'localhost',
	user: 'admin',
	password: 'sho0O-a+z1#Lpd(./y%f',
	database: 'authorization',
});

app.post('/login', (req, res) => {
	const sql = 'SELECT * FROM userData WHERE email = ? AND password = ?';
	db.query(sql, [req.body.email, req.body.password], (error, data) => {
		if (error) {
			return res.json(error); // Выводим ошибку в консоль
		}

		if (data.length > 0) {
			return res.json('Login successfully!');
		} else {
			res.status(400);
			return res.json('Not found profile!');
		}
	});
});

app.post('/register', (req, res) => {
	db.query('SELECT * FROM userData WHERE email = ?', req.body.email, (error, results) => {
		if (error) {
			console.error('Error checking email uniqueness:', error);
			return res.json('Error checking email uniqueness');
		}

		if (results.length === 0) {
			const sql = `INSERT INTO userData (email, password) VALUES (?, ?); `;
			db.query(sql, [req.body.email, req.body.password], error => {
				if (error) {
					console.error('Error inserting user:', Error);
					return res.json(error); // Выводим ошибку в консоль
				}
				return res.json('Register successfully!');
			});
		} else {
			res.status(400);
			return res.json('This email is already exist!');
		}
	});
});

// db.query(`SELECT * FROM userData WHERE email = 'admin@gmai.com'`, (error, results) => {
// 	if (error) throw error;
// 	console.log('The solution is: ', results);
// });

app.listen(8081, () => {
	console.log('Listening on port 8081...');
});

app.on('SIGINT', () => {
	console.log('Closing server...');
	db.end(err => {
		if (err) {
			console.error('Error closing database connection:', err);
			app.exit(1);
		}
		console.log('Database connection closed.');
		app.exit(0);
	});
});
