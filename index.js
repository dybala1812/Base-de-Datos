const express = require("express");
const connectDB = require("./db");
const videojuegoRoutes = require("./routes/videojuegoRoutes");
const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());
app.use('/api/videojuegos', videojuegoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

