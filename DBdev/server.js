// const express = require('express');
// const app = express();
// app.use(express.json());
// var mysql = require('mysql');
// const connection= mysql.createConnection({
//   host: 'mysql',
//   user: 'exampleuser',
//   password: 'password' 
// });
// app.get('/', (req, res) => {
// res.send('HELLO WORLD!');
// });
// //PORT ENVIRONMENT VARIABLE
// const port = process.env.PORT || 8080;
// app.listen(port, () => console.log(`Listening on port ${port}..`));
const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
res.send('HELLO WORLD!');
});
  

//Connect to MySQL
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


// ROUTES FOR  API

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
// /api/shipCompanies/get
router.get('/shipCompanies/get', function (req, res) {
	con.query("SELECT * FROM shipCompanies", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Post a new shipping company
// /api/shipCompanies/post
router.post('/shipCompanies/post', async (req, res) => {
  res.send(req.params);
  var sql = "INSERT INTO shipCompanies(name, id) VALUES (";
  var name = req.query.name;
  sql += name;
  sql += ", ";
  var id = req.query.id;
  sql += id;
  sql += ")";
  
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Delete a shipping company
// /api/shipCompanies/:id/delete
router.delete('/shipCompanies/:id/delete', async (req, res) => {
  var id = req.params.id;
  var sql = "DELETE FROM shipCompanies WHERE id = "
  sql += id;
  console.log(sql);
	con.query(sql,function (err, result, fields) {
		if (err)
			return console.error(error.message);
		res.end(JSON.stringify(result));
	  });
});

//ships

//Get ships
// /api/ships/get
router.get('/ships/get', function (req, res) {
	con.query("SELECT * FROM ships", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//Post a new ship
// /api/ships/post
router.post('/ships/post', async (req, res) => {
  res.send(req.params);
  var sql = "INSERT INTO ships(name, id, companyID) VALUES (";
  var name = req.query.name;
  sql += name;
  sql += ", ";
  var id = req.query.id;
  sql += id;
  sql += ", "
  var companyid = req.query.companyid
  sql += companyid
  sql += ")";
  console.log(sql);
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});


//Delete a ship
// /api/ships/:id/delete
router.delete('/ships/:id/delete', async (req, res) => {
  var id = req.params.id;
  var sql = "DELETE FROM ships WHERE id = "
  sql += id;
  console.log(sql);
	con.query(sql,function (err, result, fields) {
		if (err)
			return console.error(error.message);
		res.end(JSON.stringify(result));
	  });
});









// //GET ProductCode
// // /api/products/{productCode}/get
// router.get('/products/:code/get', function (req, res) {
// 	var code = req.params.code;
// 	con.query("SELECT * FROM products WHERE productCode = ?", code, function (err, result, fields) {
// 		if (err) throw err;
// 		res.end(JSON.stringify(result)); // Result in JSON format
// 	});
// });




// //For PRODUCTS

// //GET
// // /api/products/get
// router.get('/products/get', function (req, res) {
// 	con.query("SELECT * FROM products", function (err, result, fields) {
// 		if (err) throw err;
// 		res.end(JSON.stringify(result)); // Result in JSON format
// 	});
// });

// // POST
// // /api/products/post
// //productLine must be a productLine that already exists in productlines
// router.post('/products/post', async (req, res) => {
//   res.send(req.params);
//   var sql = "INSERT INTO products(productCode, productName, productLine, productScale, productVendor, productDescription, quantityInStock, buyPrice, MSRP) VALUES (";
//   var code = req.query.code;
//   sql += code;
//   sql += ", ";
//   var name = req.query.name;
//   sql += name;
//   sql += ", ";
//   var line = req.query.line;
//   sql += line;
//   sql += ", ";
//   var scale = req.query.scale;
//   sql += scale;
//   sql += ", ";
//   var vendor = req.query.vendor;
//   sql += vendor;
//   sql += ", ";
//   var description = req.query.description;
//   sql += description;
//   sql += ", ";
//   var quantity = req.query.quantity;
//   sql += quantity;
//   sql += ", ";
//   var buyPrice = req.query.buyPrice;
//   sql += buyPrice;
//   sql += ", ";
//   var msrp = req.query.msrp;
//   sql += msrp;
//   sql += ")";
  
// 	con.query(sql, function (err, result, fields) {
// 		if (err) throw err;
// 		res.end(JSON.stringify(result)); // Result in JSON format
// 	});
// });

// //GET ProductCode
// // /api/products/{productCode}/get
// router.get('/products/:code/get', function (req, res) {
// 	var code = req.params.code;
// 	con.query("SELECT * FROM products WHERE productCode = ?", code, function (err, result, fields) {
// 		if (err) throw err;
// 		res.end(JSON.stringify(result)); // Result in JSON format
// 	});
// });

// // PUT
// // /api/products/{productCode}/post/{newQuantity}
// router.put('/products/:code/post/:quantity', async (req, res) => {
//   var code = req.params.code;
//   var quantity = req.params.quantity;
//   var sql = "UPDATE products SET quantityInStock = ";
//   sql += quantity;
//   sql += " WHERE productCode = '";
//   sql += code;
//   sql += "'";
//   console.log(sql);
// 	con.query(sql, function (err, result, fields) {
// 		if (err) throw err;
// 		//console.log(result);
// 		res.end(JSON.stringify(result)); 
// 	});
// });

// // DELETE
// // /api/deleteit
// router.delete('/products/:code/delete', async (req, res) => {
//   var code = req.params.code;
//   var sql = "DELETE FROM products WHERE productCode = '";
//   sql += code;
//   sql += "'";
//   console.log(sql);
// 	con.query(sql,function (err, result, fields) {
// 		if (err) 
// 			return console.error(error.message);
// 		res.end(JSON.stringify(result)); 
// 	  });
// });

// // For PAYMENTS

// //GET
// // /api/payments/get
// router.get('/payments/get', function (req, res) {
// 	con.query("SELECT * FROM payments", function (err, result, fields) {
// 		if (err) throw err;
// 		res.end(JSON.stringify(result)); // Result in JSON format
// 	});
// });

// // POST
// // /api/apyments/post
// //cusomerNumber value be a value which already exists in customers
// router.post('/payments/post', async (req, res) => {
//   res.send(req.params);
//   var sql = "INSERT INTO payments(customerNumber, checkNumber, paymentDate, amount) VALUES (";
//   var customer = req.query.customerNumber;
//   sql += customer;
//   sql += ", ";
//   var check = req.query.checkNumber;
//   sql += check;
//   sql += ", ";
//   var date = req.query.paymentDate;
//   sql += date;
//   sql += ", ";
//   var amount = req.query.amount;
//   sql += amount;
//   sql += ")";
//   console.log(sql);
// 	con.query(sql, function (err, result, fields) {
// 		if (err) throw err;
// 		res.end(JSON.stringify(result)); // Result in JSON format
// 	});
// });

// REGISTER  ROUTES -------------------------------
app.use('/api', router);

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));