import Fecha from './fecha.js';
import Tiempo from './tiempo.js';
import Doctor from './doctor.js';
import Paciente from './paciente.js';
export default class cita {
  /**
   *
   * @param {Fecha} fecha
   * @param {Tiempo} hora
   * @param {Doctor} doctor
   * @param {Paciente} paciente
   */
  constructor(fecha, hora, doctor, paciente) {
    this._fecha = fecha
    this._hora = hora
    this._doctor = doctor
    this._paciente = paciente
  }

  getCita() {
    return `${this._fecha.getFecha()}, ${this._hora.getFormato24()}, Dr. ${
      this._doctor.nombre.apellidoPaterno
    }, ${this._paciente.nombre.getNombreCompleto()}`
  }
  _esIgualA(cita){
    if(cita == this){ return true}
    else {return false}
  }
}
