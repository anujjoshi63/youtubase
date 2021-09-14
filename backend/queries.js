require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
	user: process.env.user,
	host: process.env.host,
	database: process.env.database,
	password: process.env.password,
	port: process.env.port
});
const getVideos = (req, res) => {
	pool.query('SELECT * FROM posts', (err, result) => {
		if (err) {
			return res.status(500).json({ err });
		}
		res.status(200).json(result?.rows);
	});
};
const createVideos = (req, res) => {
	pool.query(
		'INSERT INTO posts (title, thumbnail, views, dislikes, likes) VALUES ($1, $2, $3, $4, $5)',
		[
			req.body.title,
			req.body.thumbnail,
			req.body.views,
			req.body.dislikes,
			req.body.likes
		],
		(err, result) => {
			console.log('result', result);
			if (err) {
				return res.status(500).json({ err });
			}
			res.status(200).json(result?.rows);
		}
	);
};
module.exports = {
	getVideos,
	createVideos
};
