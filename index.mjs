import { registrar, leer } from './operaciones.mjs'
// quitamos los 2 primeros parametros (ruta al ejecutable y al script)
const argumentos = process.argv.slice(2)
// capturamos la accion a realizar
const accion = argumentos[0]

// verificamos si la accion entrante es 'registrar'
if (accion === 'registrar') {
  const nombre = argumentos[1]
  const edad = argumentos[2]
  const tipo = argumentos[3]
  const color = argumentos [4]
  const enfermedad = argumentos[5]
  registrar(nombre, edad, tipo, color, enfermedad)
}

// verificamos si la accion entrante es 'leer'
if (accion === 'leer') {
  leer()
}

