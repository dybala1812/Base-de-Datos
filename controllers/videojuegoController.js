const Videojuego = require("../models/videojuego");

// Función para agregar un videojuego
const agregarVideojuego = async (req, res) => {
  try {
    const { nombre, consola, precio, stock, multijugador } = req.body;

    const nuevoVideojuego = new Videojuego({
      nombre,
      consola,
      precio,
      stock,
      multijugador,
    });

    await nuevoVideojuego.save();
    res.status(201).json({ success: true, data: nuevoVideojuego });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 1. Juegos de PlayStation 5
const juegosPlayStation5 = async (req, res) => {
  try {
    const juegos = await Videojuego.find({ consola: "PlayStation 5" });
    res.json({ success: true, data: juegos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 2. Juegos con precio menor a 40
const juegosBaratos = async (req, res) => {
  try {
    const juegos = await Videojuego.find({ precio: { $lt: 40 } });
    res.json({ success: true, data: juegos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 3. Juegos multijugador con stock disponible
const juegosMultijugadorConStock = async (req, res) => {
  try {
    const juegos = await Videojuego.find({ multijugador: true, stock: { $gt: 0 } });
    res.json({ success: true, data: juegos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 4. Contar juegos de Xbox Series X
const contarXboxSeriesX = async (req, res) => {
  try {
    const cantidad = await Videojuego.countDocuments({ consola: "Xbox Series X" });
    res.json({ success: true, total: cantidad });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 5. Juegos con precio mayor a 50
const juegosCaros = async (req, res) => {
  try {
    const juegos = await Videojuego.find(
      { precio: { $gt: 50 } },
      { nombre: 1, precio: 1, _id: 0 }
    );
    res.json({ success: true, data: juegos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Exportar todas las funciones
module.exports = {
  agregarVideojuego,
  juegosPlayStation5,
  juegosBaratos,
  juegosMultijugadorConStock,
  contarXboxSeriesX,
  juegosCaros,
};

