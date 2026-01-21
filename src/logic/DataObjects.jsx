export class Usuario {
  constructor(codigo, nombre, clave, rol) {
    this._codigo = codigo;
    this._nombre = nombre;
    this._clave = clave;
    this._rol = rol;
  }
}

export class Jugada {
  constructor(codjugada, codigousu, acierto) {
    this._codjugada = codjugada;
    this._codigousu = codigousu;
    this._acierto = acierto;
  }
}
