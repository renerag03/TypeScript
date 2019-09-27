"use strict";
exports.__esModule = true;
/**
 * Se necesita resolver el siguiente problema usando programacion
 * orientada a objetos se desea realizar un sistema de venta de cursos
 * online como por ejemplo Udemy, platzi,etc.
 * Para ello se necesita interactuar con estudiantes, profesores de los
 * mismos se necesita registrar su informacion basica como nombre, apellido,
 * correo, direccion; por otra parte se necesita interactuar con los cursos
 * que se impartiran de los mismos se necesita interactuar con los mismos se
 * necisita registrar su precio, nombre, descripcion; finalmente se desea
 * guardar el registro de los estudiantes que compran algun curso.
 * un estudiante o profesor puede tener una o mas direcciones, al mismo tiempo
 * una direccion esta compuesta por la siguiente informacion: ciudad barrio, calle.
 * Para los profesores en particular se necesita guardar su profesion.
 */
var CompraCurso = /** @class */ (function () {
    function CompraCurso(cur, est, f) {
        this.curso = cur;
        this.estudiante = est;
        this.fecha = f;
    }
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
var Curso = /** @class */ (function () {
    function Curso(n, p, d, doc) {
        this.nombre = n;
        this.precio = p;
        this.descripcion = d;
        this.docente = doc;
    }
    return Curso;
}());
exports.Curso = Curso;
var Estudiante = /** @class */ (function () {
    function Estudiante(nom, ape, cor, dir) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = cor;
        this.direccion = dir;
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var Docente = /** @class */ (function () {
    function Docente(nom, ape, pro, cor, dir) {
        this.nombre = nom;
        this.apellido = ape;
        this.profesion = pro;
        this.correo = cor;
        this.direccion = dir;
    }
    return Docente;
}());
exports.Docente = Docente;
var Direccion = /** @class */ (function () {
    function Direccion(ciu, b, ca) {
        this.ciudad = ciu;
        this.barrio = b;
        this.calle = ca;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
//Direccion Docentes
var direccionD1 = new Direccion("Cochabamba", "", "Av. America");
var direccion1 = new Direccion("Cochabamba", "", "Av Circunvalacion");
var direccionD2 = new Direccion("Cochabamba", "", "Av. oquendo");
var direccion2 = new Direccion("Cochabamba", "", "Av. 6 de agosto");
//Direcciones Estudiantes
var direccionE1 = new Direccion("Cochabamba", "", "Suecia");
var direccionE2 = new Direccion("Cochabamba", "", "Av. guillermo Urquidi");
var direccionE3 = new Direccion("Cochabamba", "", "Av Heroinas");
var direccionE4 = new Direccion("Cochabamba", "", "Av. Capitan Ustariz");
var direccionE5 = new Direccion("Cochabamba", "", "Chimba");
var direccionE6 = new Direccion("Cochabamba", "", "Av. Independencia");
var direccionE7 = new Direccion("Cochabamba", "", "Guayacan");
var direccionE8 = new Direccion("Cochabamba", "", "Av. Oquendo");
var direccionE9 = new Direccion("Cochabamba", "", "Cerro Verde");
var direccionE10 = new Direccion("Cochabamba", "", "Av. Simon Lopez");
//Docentes
var docente1 = new Docente("Diego", "Ramos", "Lic Informatica", "", [direccion1, direccionD1]);
var docente2 = new Docente("Boris", "Calancha", "Lic Informatica", "", [direccion2, direccionD2]);
//Estudiantes
var estudiante1 = new Estudiante("Rojer", "Salazar", "", direccionE1);
var estudiante2 = new Estudiante("Juan", "Oropeza", "", direccionE2);
var estudiante3 = new Estudiante("Erick", "Fernandez", "", direccionE3);
var estudiante4 = new Estudiante("Diego", "Pinto", "", direccionE4);
var estudiante5 = new Estudiante("Juan", "Santos", "", direccionE5);
var estudiante6 = new Estudiante("Pedro", "Artiaga", "", direccionE6);
var estudiante7 = new Estudiante("Manuel", "Martinez", "", direccionE7);
var estudiante8 = new Estudiante("Giovanna", "Brañez", "", direccionE8);
var estudiante9 = new Estudiante("Neelia", "Ustariz", "", direccionE9);
var estudiante10 = new Estudiante("Aleida", "Fernadez", "", direccionE10);
//Cursos
var curso1 = new Curso("Python", 100, "En Linea", docente1);
var curso2 = new Curso("Java", 80, "En Linea", docente1);
var curso3 = new Curso("Base de Datos", 150, "En Linea", docente2);
var curso4 = new Curso("Programacion Web", 100, "En Linea", docente2);
var curso5 = new Curso("Open English", 100, "En Linea", docente1);
var curso6 = new Curso("Ruby", 100, "En Linea", docente2);
var curso7 = new Curso("Exel Online", 100, "En Linea", docente1);
var curso8 = new Curso("Android", 100, "En Linea", docente2);
var curso9 = new Curso("Php", 100, "En Linea", docente1);
//Compra Cursos
var compraCurso1 = new CompraCurso(curso1, estudiante1, "25/09/2019");
var compraCurso2 = new CompraCurso(curso2, estudiante9, "25/09/2019");
var compraCurso3 = new CompraCurso(curso2, estudiante5, "27/09/2019");
var compraCurso4 = new CompraCurso(curso4, estudiante2, "25/09/2019");
var compraCurso5 = new CompraCurso(curso4, estudiante8, "27/09/2019");
var compraCurso6 = new CompraCurso(curso3, estudiante3, "26/09/2019");
var compraCurso7 = new CompraCurso(curso3, estudiante4, "27/09/2019");
var compraCurso8 = new CompraCurso(curso8, estudiante6, "20/09/2019");
var compraCurso9 = new CompraCurso(curso8, estudiante5, "22/09/2019");
var compraCurso10 = new CompraCurso(curso5, estudiante1, "20/09/2019");
var compraCurso11 = new CompraCurso(curso5, estudiante7, "24/09/2019");
var compraCurso12 = new CompraCurso(curso5, estudiante10, "23/09/2019");
console.log(docente1);
console.log(docente2);
console.log(estudiante1);
console.log(estudiante10);
