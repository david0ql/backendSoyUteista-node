const express = require("express");
const soyuteista = express.Router();
const {
  carnetEntrada,
  qualificationEntrada,
  scheduleEntrada,
  professionalsByFieldEntrada,
  scheduleByProfessional,
  insertAppointment,
  deleteAppointments,
  enabledModulesEntrada,
  podcastEntrada,
  exitoEscolarEntrada,
  find,
  create,
  remove,
  findDependencia,
  createDependencia,
  removeDependencia
} = require("./soyuteista.service");

const KEY = "JSPHPWORKS4everandever!";
soyuteista.use((req, res, next) => {
  if (req.query.key != KEY) {
    return res.json({
      result: 69,
      data: {},
      error: "Token invalido",
    });
  } else if (!req.query.email) {
    return res.json({
      result: 2,
      data: {},
      error: "'|'[-||(_+[] #/-//|3/2[-, desencriptelo mi papa!",
    });
  } else {
    next();
  }
});

soyuteista.get("/carnet", carnetEntrada);

soyuteista.get("/qualification", qualificationEntrada);

soyuteista.get("/schedule", scheduleEntrada);

soyuteista.get("/enabled-modules", enabledModulesEntrada);

soyuteista.get("/podcast", podcastEntrada);

soyuteista.get("/exito-escolar", exitoEscolarEntrada);

soyuteista.get("/bienestar/professionals-by-field", professionalsByFieldEntrada);

soyuteista.get("/bienestar/schedule-by-professional", scheduleByProfessional);

soyuteista.get("/convocatorias", find);

soyuteista.post("/convocatorias", create);

soyuteista.get("/dependencias", findDependencia);

soyuteista.post("/dependencias", createDependencia);

soyuteista.post("/bienestar/insert-appointment", insertAppointment);

soyuteista.delete("/convocatorias/:idConvocatoria", remove);

soyuteista.delete("/bienestar/delete-appointments", deleteAppointments);

soyuteista.delete("/dependencias/:idDependencia", removeDependencia);

module.exports = {
  soyuteista,
};
