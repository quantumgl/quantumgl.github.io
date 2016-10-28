/**
 * Created by andres on 10-28-16.
 */

function Pelicula() {
    this.fechaComienzo = "";
    this.fechaTerminacion = "";
    this.titulo = "";
    this.actores = [];
    this.director = "";
    this.calificacion = 0;
    this.imagenPortada = 0;
}

function Sala() {
    this.pelicula = 0;
    this.tandas = [];
    this.ventasPelicula = 0;
    this.asientosDisponibles = 0;
    this.asientosMaximos = 0;
}

function Centro() {
    this.nombreCentro = "";
    this.listaSalas = 0;
}