const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost', // Cambia esto por la dirección de tu servidor MySQL
  port: '3306',
  user: 'joaki', // Cambia esto por tu nombre de usuario
  password: 'myrootpass1234', // Cambia esto por tu contraseña
  database: 'onecoffeefirst' // Cambia esto por el nombre de tu base de datos
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.message);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

module.exports = db;