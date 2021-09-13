const express = require('express');
const db = require('./queries');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ data: 'Hello World!' });
});

app.get('/videos', db.getVideos);
app.post('/videos', db.createVideos);

app.listen(8000, () => {
	console.log('app listening on port 8000!');
});
