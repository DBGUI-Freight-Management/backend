//Use express, start mySQL, open connection (the code before the endpoints)
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
res.send('HELLO WORLD!');
});

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysql",
  port: "3306",
  user: "root",
  password: "password",
  database: "freight"
});

//Open Connection
con.connect(function(err) {
	  if (err) throw err;
});

// create router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

//shipCompanies

//Get shipping companies
router.get('/shipCompanies/get', function (req, res) {
	con.query("SELECT * FROM shipCompanies", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Post a new shipping company
router.post('/shipCompanies/post', async (req, res) => {
  let sql = `INSERT INTO shipCompanies(name, id) VALUES ('${req.query.name}', '${req.query.id}')`;
  res.send(req.params);
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Delete a shipping company
router.delete('/shipCompanies/:id/delete', async (req, res) => {
  let sql = `DELETE FROM shipCompanies WHERE id = ${req.params.id}`;
  console.log(sql);
	con.query(sql,function (err, result, fields) {
		if (err)
			return console.error(error.message);
		res.end(JSON.stringify(result));
	  });
});

//ships

//Get ships
router.get('/ships/get', function (req, res) {
	con.query("SELECT * FROM ships", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Post a new ship
router.post('/ships/post', async (req, res) => {
  let sql = `INSERT INTO ships(name, id, companyID) VALUES ('${req.query.name}', '${req.query.id}', '${req.query.companyid}')`;
  res.send(req.params);
  console.log(sql);
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Delete a ship
router.delete('/ships/:id/delete', async (req, res) => {
  let sql = `DELETE FROM ships WHERE id = ${req.params.id}`;
  console.log(sql);
	con.query(sql,function (err, result, fields) {
		if (err)
			return console.error(error.message);
		res.end(JSON.stringify(result));
	  });
});

// // PUT
// router.put('/products/:code/post/:quantity', async (req, res) => {
//   let sql = `UPDATE products SET quantityInStock = ${req.params.quantity}
//              WHERE productCode = '${req.params.code}'`;
//   console.log(sql);
// 	con.query(sql, function (err, result, fields) {
// 		if (err) throw err;
// 		//console.log(result);
// 		res.end(JSON.stringify(result)); 
// 	});
// });

//Code after endpoints
// REGISTER  ROUTES -------------------------------
app.use('/api', router);

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));