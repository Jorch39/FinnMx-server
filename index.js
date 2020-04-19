const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//Crea el server
const app = express();

//Conectar a la bd
connectDB();

//Habilitar cors 
app.use(cors());

//Habilitar express.json
app.use( express.json({ extended : true }));

//Puerto de la app
const port = process.env.PORT || 5000;

//Importar rutas 
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/forms', require('./routes/forms'));
// app.use('/api/recommender', require('./routes/recommender'));

//
app.get('/', (req, res)=> {
    res.send('FinnMx')
})



app.use((req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(__dirname + "/public/index.html");
  });

app.use(cors({
credentials: true,
origin: ['https://competent-agnesi-9c644c.netlify.app'] // <== this will be the URL of our React app (it will be running on port 3000)
// origin: ['http://localhost:3000'] 
}));


//Arrancar la app
app.listen(port, '0.0.0.0', () => {
// app.listen(PORT, () => {

    console.log(`Server listening on port ${port}`)
});
