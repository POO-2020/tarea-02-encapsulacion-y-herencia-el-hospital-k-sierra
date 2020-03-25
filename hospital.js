import Fecha from './fecha.js'
import Tiempo from './tiempo.js'
import Nombre from './nombre.js'
import Paciente from './paciente.js'
import Doctor from './doctor.js'
import Cita from './cita.js'
export default class Hospital {
  /**
   *
   * @param {string} nombre
   * @param {string} direccion
   */
  constructor({nombre, direccion}) {
    this._nombre = nombre
    this._direccion = direccion
    this._doctores = new Array()
    this._citas = new Array()
  }

  registrarDoctor(doctor) {
    let obtener = this._doctores.push(doctor)
    if(obtener == null){
      this._doctores.push(doctor)
      return true
    }
    else{
      return false
    }
  }
  buscarDoctor(doctor){
    let buscar = this._doctores.find(doc => doc._esIgualA(doctor))
    if(buscar == undefined)
    return null
    else
    return buscar
    }
  modificarDoctor(doctor, nuevoDoctor){
    let obtener = this.buscarDoctor(doctor)
    if(obtener == null)
    return false
    else{
    let i = this._doctores.indexOf(obtener)
    this._doctores[i] = nuevoDoctor
    return true
    }
  }  
  eliminarDoctor(doctor){
    let obtener =  this.buscarDoctor(doctor)
    if(obtener == null) 
    return false
    else {
    let i = this._doctores.indexOf(obtener)
    this._doctores.splice(i,1)
    return true
    }
  }
  listarDoctores() {
    this._doctores.forEach((doctor, i) => {
      console.log(`${i + 1} ${doctor.getPerfil()}`)
    })
  }
  registrarCita(cita) {
    this._citas.push(cita)
  }
  buscarCita(cita){
    let buscar = this._citas.find(cit => cit._esIgualA(cita))
    if(buscar == undefined)
    return null
    else 
    return buscar
    }
  modificarCita(cita, nuevaCita){
    let obtener = this.buscarCita(cita)
    if(obtener == null)
    return false
    else {
    let i = this._citas.indexOf(obtener)
    this._citas[i] = nuevaCita
    return true
    }
  }
  eliminarCita(cita){
    let obtener =  this.buscarCita(cita)
    if(obtener == null)
    return false
    else{
    let i = this._citas.indexOf(obtener)
    this._citas.splice(i,1)
    return true
    }
  }
  listarCitas() {
    this._citas.forEach((cita, i) => {
      console.log(`${i + 1} ${cita.getCita()}`)
    })
  }
}