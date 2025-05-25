import fs from 'fs'
import crypto from 'crypto'

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  try {
    const data = fs.readFileSync('citas.json', 'utf-8')
    const coleccion = JSON.parse(data)

    // Generamos el id unico
    const id = crypto.randomUUID()

    // Verificamos si se ingresaron todas las variables
    if (!nombre || !edad || !tipo || !color || !enfermedad) {
      console.log('Favor ingrese todos los datos')
      return
    }

    // Si los datos están correctos, podemos agregar la nueva cita
    coleccion.push( {id, nombre, edad, tipo, color, enfermedad })
    // Convertimos el arreglo actualizado a una cadena JSON y sobreescribimos 'coleccion.json'
    fs.writeFileSync('citas.json', JSON.stringify(coleccion))
    
    console.log('Registro actualizado => ', coleccion)

  } catch (error) {
    console.error(error)
    
  }
}

const leer = () => {
  try {
    const data = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    console.log(data)

  } catch (error) {
    console.error(error)
  }

}

export { registrar, leer }
