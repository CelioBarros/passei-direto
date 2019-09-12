const mysql      = require('mysql');
const mysqlOptions = {
  host     : 'localhost',
  port     : 3306,
  user     : 'passei',
  password : 'direto',
  database : 'PASSEIDIRETO'
};

function execSQLQuery(sqlQry, res, optionalValues = []){
  const connection = mysql.createConnection(mysqlOptions);

  connection.query(sqlQry, optionalValues, function(error, results, fields) {
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}

module.exports = {
  execSQLQuery
}