var express = require('express');
var app = express();
app.get('/', (req, res) => {
	res.json({ data: 'Hello World!' });
});
app.listen(8000, () => {
	console.log('app listening on port 8000!');
});
