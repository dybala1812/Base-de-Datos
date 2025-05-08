const express = require('express');
const router = express.Router();
const {
  agregarVideojuego,
  juegosPlayStation5,
  juegosBaratos,
  juegosMultijugadorConStock,
  contarXboxSeriesX,
  juegosCaros
} = require('../controllers/videojuegoController');

// Aquí está el problema si esto falla:
router.post('/agregar', agregarVideojuego);

// Rutas GET
router.get('/ps5', juegosPlayStation5);
router.get('/baratos', juegosBaratos);
router.get('/multijugador-stock', juegosMultijugadorConStock);
router.get('/xbox-count', contarXboxSeriesX);
router.get('/caros', juegosCaros);

module.exports = router;

