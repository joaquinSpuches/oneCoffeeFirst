const express = require('express');
const db = require('./dbconfig'); // Importa la conexión a la base de datos
const app = express();
const cors =require('cors')

const allowedOrigins = ['http://localhost:3000', 'http://192.168.0.10:3000']; // Agrega los orígenes permitidos que desees

app.use(cors({ origin: allowedOrigins }));
// Ruta para obtener datos de la base de datos
// app.get('/usuarios', (req, res) => {
//   db.query('SELECT * FROM usuarios', (err, results) => {
//     if (err) {
//       console.error('Error al realizar la consulta: ' + err.message);
//       res.status(500).send('Error en el servidor');
//     } else {
//       res.json(results);
//     }
//   });
// });
app.get('/recetas_cafe', (req, res) => {
  db.query('SELECT * FROM recetas_cafe', (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta: ' + err.message);
      res.status(500).send('Error en el servidor');
    } else {

      res.json(results);
    
    }
  });
});

app.listen(3001, () => {
  console.log('El servidor está escuchando en el puerto 3001');
});


  
// db.query('SELECT * FROM usuarios', (err, results) => {
//     if (err) {
//       console.error('Error al realizar la consulta: ' + err.message);
//     } else {
//       console.log('Registros de usuarios:', results);
//     }
//   });

//   const usuarioId = null; // ID del usuario a eliminar
