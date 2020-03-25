import Nombre from './nombre.js'
import Tiempo from './tiempo.js'
import Fecha from './fecha.js'
import Doctor from './doctor.js'
import Paciente from './paciente.js'
import Cita from './cita.js'
import Hospital from './hospital.js'
import PacienteAsegurado from './pacienteAsegurado.js'

class Main{
  constructor(){
    this.tiempo1 = new Tiempo({ hora: 11, minuto: 55, periodo: 'AM' })
    this.tiempo2 = new Tiempo({ hora: 1, minuto: 33, periodo: 'PM' })

    this.fecha = new Fecha(5, 5, 2001)

    this.nombre = new Nombre('Karla', 'Sierra', 'Rodriguez')
    this.nombre2 = new Nombre('David', 'Loredo', 'Ramírez')
    this.paciente = new Paciente(this.nombre, this.fecha, 3121003056)
    this.doctor = new Doctor(this.nombre2, 'Nutriologo', 3123094330, 324236)
    this.cita = new Cita(this.fecha, this.tiempo1, this.doctor, this.paciente)
    this.hospital = new Hospital('Hospital Loki', 'Dr. Miguel Galindo #709')
  }
  probarTiempo(){
    console.log(this.tiempo1.getFormato12())
    console.log(this.tiempo2.getFormato12())
    console.log(this.tiempo1.getFormato24())
    console.log(this.tiempo2.getFormato24())
  }
  probarFecha(){
    console.log(this.fecha.getAños())
    console.log(this.fecha.getMeses())
    console.log(this.fecha.getSemanas())
    console.log(this.fecha.getDias())
    console.log(this.fecha.getFecha())
    console.log(this.fecha.getDiaFecha())
  }
  probarNombre(){
    console.log(this.nombre.getNombreCompleto())
    console.log(this.nombre.getApellidoNombre())
    console.log(this.nombre.getIniciales())
  }
  probarPaciente(){
    console.log(this.paciente.getPerfil())
  }
  probarDoctor(){
    console.log(this.doctor.getPerfil())
  }
  probarCita(){
    console.log(this.cita.getCita())
  }
  probarHospital(){
    this.hospital.registrarDoctor(this.doctor)
    this.hospital.registrarCita(this.cita)
    this.hospital.listarDoctores()
    this.hospital.listarCitas()
  }
}
let app = new Main()
app.probarTiempo()
app.probarFecha()
app.probarNombre()
app.probarPaciente()
app.probarDoctor()
app.probarCita()
app.probarHospital()