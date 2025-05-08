const mongoose = require('mongoose');

const videojuegoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  consola: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  multijugador: { type: Boolean, required: true },
});

const Videojuego = mongoose.model('Videojuego', videojuegoSchema);

module.exports = Videojuego;


