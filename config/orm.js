
// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
// Create function to select all
all: function(table, cb) {
  var queryString = "SELECT * FROM ??";
  connection.query(queryString, [table], function(err, result) {
    if (err) throw err;
    cb(result);
  });
},
// Create function to insert a burger
// insertOne: function(dataBase, table, orderCol) {
//   var queryString = "INSERT INTO burgers ?? SELECT 

//     cb.log(result);
//   });
// },
// Create a function to Update the burger when devoured
// updateOne: function()



  
};



// Export the orm object for the model (burger.js).
module.exports = orm;
