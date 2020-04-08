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

//companies

//Get companies
router.get('/companies/get', function (req, res) {
	con.query("SELECT * FROM companies", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Get shipping companies
router.get('/companies/get/shipping', function (req, res) {
	con.query("SELECT * FROM companies WHERE companyType = 1", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Get client companies
router.get('/companies/get/client', function (req, res) {
	con.query("SELECT * FROM companies WHERE companyType = 2", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Post a new company
router.post('/companies/post', async (req, res) => {
  let sql = `INSERT INTO companies(name, companyType) VALUES (\'${req.query.name}\', ${req.query.companyType})`;
  res.send(req.params);
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Delete a company
router.delete('/companies/:id/delete', async (req, res) => {
  let sql = `DELETE FROM companies WHERE id = ${req.params.id}`;
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

//Get ships with destinations
router.get('/ships/getWithDestinations', function (req, res) {
	//statusLog = 'active'
	con.query("SELECT * FROM ships s INNER JOIN trips t " +
		"ON s.tripID = t.tripID WHERE s.statusLog = \'on route\';", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Get all ship logs for a particular ship captain
router.get('/ships/getWithDestinations', function (req, res) {
	//statusLog = 'active'
	con.query("SELECT * FROM ships s INNER JOIN trips t " +
		"ON s.tripID = t.tripID WHERE s.statusLog = \'on route\';", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Post a new ship
router.post('/ships/post', async (req, res) => {
  let sql = `INSERT INTO ships(name, companyID) VALUES (\'${req.query.name}\', ${req.query.companyid})`;
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

//accountTypes

//Get accountTypes
router.get('/accountTypes/get', function (req, res) {
	con.query("SELECT * FROM accountTypes", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Post a new account type (You probably shouldn't do this)
router.post('/accountTypes/post', async (req, res) => {
  let sql = `INSERT INTO accountTypes(type, description) VALUES (\'${req.query.type}\', \'${req.query.description}\')`;
  res.send(req.params);
  console.log(sql);
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Delete a account type (You probably shouldn't do this)
router.delete('/accountTypes/:id/delete', async (req, res) => {
  let sql = `DELETE FROM accountTypes WHERE id = ${req.params.id}`;
  console.log(sql);
	con.query(sql,function (err, result, fields) {
		if (err)
			return console.error(error.message);
		res.end(JSON.stringify(result));
	  });
});

//users

//Get users
router.get('/users/get', function (req, res) {
	con.query("SELECT * FROM users", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Post a user
router.post('/users/post', async (req, res) => {
  let sql = `INSERT INTO users(username, email, password, accountType, companyID) VALUES (\'${req.query.username}\', \'${req.query.email}\', \'${req.query.password}\', ${req.query.type}, ${req.query.companyid})`;
  res.send(req.params);
  console.log(sql);
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Delete a account type (You probably shouldn't do this)
router.delete('/users/:id/delete', async (req, res) => {
  let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
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
//              WHERE productCode = \'${req.params.code}\'`;
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