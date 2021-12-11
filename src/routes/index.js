const {Router} = require('express');
const router = Router();
const {getIncidencia, getIncidenciaGC, getIncidenciaCG, getIncidenciaDQ, getIncidenciaLO, getIncidenciaDB, getIncidenciaSC} = require('../controllers/index.controller')


 router.get('/obtenerIncidencias', getIncidencia); 
 router.get('/obtenerIncidenciasGC', getIncidenciaGC); 
 router.get('/obtenerIncidenciasDQ', getIncidenciaDQ); 
 router.get('/obtenerIncidenciasCG', getIncidenciaCG); 
 router.get('/obtenerIncidenciasLO', getIncidenciaLO); 
 router.get('/obtenerIncidenciasDB', getIncidenciaDB); 
 router.get('/obtenerIncidenciasSC', getIncidenciaSC); 

module.exports = router;