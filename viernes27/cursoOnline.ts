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
export class CompraCurso
{
    private curso: Curso;
    private estudiante: Estudiante;
    private fecha: string

    public constructor(cur: Curso, est: Estudiante, f: string,)
    {
        this.curso = cur;
        this.estudiante = est;
        this.fecha = f;
    }
}

 export class Curso
 { 
     private nombre: string;
     private precio: number;
     private descripcion: string;
     private docente: Docente;
     
     public constructor(n: string, p: number, d: string, doc: Docente)
     {
         this.nombre = n;
         this.precio = p;
         this.descripcion = d;
         this.docente = doc;
     }
 }

 export class Estudiante
 {
     private nombre: string;
     private apellido: string;
     private correo: string;
     private direccion: Direccion;

     public constructor(nom: string, ape: string, cor: string, dir: Direccion)
     {
         this.nombre = nom;
         this.apellido = ape;
         this.correo = cor;
         this.direccion = dir;
     }
 }

 export class Docente
 {
     private nombre: string;
     private apellido: string;
     private profesion: string
     private correo: string;
     private direccion: Direccion[];

     public constructor(nom: string, ape: string, pro: string, cor: string, dir: Direccion[])
     {
         this.nombre = nom;
         this.apellido = ape;
         this.profesion = pro;
         this.correo = cor;
         this.direccion = dir;
     }
 }

 export class Direccion
{
    private ciudad: string;
    private barrio: string;
    private calle: string;

    public constructor (ciu: string, b: string, ca: string)
    {
        this.ciudad = ciu;
        this.barrio = b;
        this.calle = ca
    }
}
//Direccion Docentes
let direccionD1: Direccion = new Direccion("Cochabamba", "", "Av. America");
let direccion1: Direccion = new Direccion("Cochabamba", "", "Av Circunvalacion");
let direccionD2: Direccion = new Direccion("Cochabamba", "", "Av. oquendo");
let direccion2: Direccion = new Direccion("Cochabamba", "", "Av. 6 de agosto");
//Direcciones Estudiantes
let direccionE1: Direccion = new Direccion("Cochabamba", "", "Suecia");
let direccionE2: Direccion = new Direccion("Cochabamba", "", "Av. guillermo Urquidi");
let direccionE3: Direccion = new Direccion("Cochabamba", "", "Av Heroinas");
let direccionE4: Direccion = new Direccion("Cochabamba", "", "Av. Capitan Ustariz");
let direccionE5: Direccion = new Direccion("Cochabamba", "", "Chimba");
let direccionE6: Direccion = new Direccion("Cochabamba", "", "Av. Independencia");
let direccionE7: Direccion = new Direccion("Cochabamba", "", "Guayacan");
let direccionE8: Direccion = new Direccion("Cochabamba", "", "Av. Oquendo");
let direccionE9: Direccion = new Direccion("Cochabamba", "", "Cerro Verde");
let direccionE10: Direccion = new Direccion("Cochabamba", "", "Av. Simon Lopez");
//Docentes
let docente1: Docente = new Docente ("Diego", "Ramos", "Lic Informatica", "", [direccion1, direccionD1]);
let docente2: Docente = new Docente ("Boris", "Calancha", "Lic Informatica", "", [direccion2, direccionD2]);
//Estudiantes
let estudiante1: Estudiante = new Estudiante("Rojer", "Salazar", "", direccionE1);
let estudiante2: Estudiante = new Estudiante("Juan", "Oropeza", "", direccionE2);
let estudiante3: Estudiante = new Estudiante("Erick", "Fernandez", "", direccionE3);
let estudiante4: Estudiante = new Estudiante("Diego", "Pinto", "", direccionE4);
let estudiante5: Estudiante = new Estudiante("Juan", "Santos", "", direccionE5);
let estudiante6: Estudiante = new Estudiante("Pedro", "Artiaga", "", direccionE6);
let estudiante7: Estudiante = new Estudiante("Manuel", "Martinez", "", direccionE7);
let estudiante8: Estudiante = new Estudiante("Giovanna", "Brañez", "", direccionE8);
let estudiante9: Estudiante = new Estudiante("Neelia", "Ustariz", "", direccionE9);
let estudiante10: Estudiante = new Estudiante("Aleida", "Fernadez", "", direccionE10);
//Cursos
let curso1: Curso = new Curso ("Python", 100, "En Linea", docente1);
let curso2: Curso = new Curso ("Java", 80, "En Linea", docente1);
let curso3: Curso = new Curso ("Base de Datos", 150, "En Linea", docente2);
let curso4: Curso = new Curso ("Programacion Web", 100, "En Linea", docente2);
let curso5: Curso = new Curso ("Open English", 100, "En Linea", docente1);
let curso6: Curso = new Curso ("Ruby", 100, "En Linea", docente2);
let curso7: Curso = new Curso ("Exel Online", 100, "En Linea", docente1);
let curso8: Curso = new Curso ("Android", 100, "En Linea", docente2);
let curso9: Curso = new Curso ("Php", 100, "En Linea", docente1);
//Compra Cursos
let compraCurso1: CompraCurso = new CompraCurso(curso1, estudiante1, "25/09/2019")
let compraCurso2: CompraCurso = new CompraCurso(curso2, estudiante9, "25/09/2019")
let compraCurso3: CompraCurso = new CompraCurso(curso2, estudiante5, "27/09/2019")
let compraCurso4: CompraCurso = new CompraCurso(curso4, estudiante2, "25/09/2019")
let compraCurso5: CompraCurso = new CompraCurso(curso4, estudiante8, "27/09/2019")
let compraCurso6: CompraCurso = new CompraCurso(curso3, estudiante3, "26/09/2019")
let compraCurso7: CompraCurso = new CompraCurso(curso3, estudiante4, "27/09/2019")
let compraCurso8: CompraCurso = new CompraCurso(curso8, estudiante6, "20/09/2019")
let compraCurso9: CompraCurso = new CompraCurso(curso8, estudiante5, "22/09/2019")
let compraCurso10: CompraCurso = new CompraCurso(curso5, estudiante1, "20/09/2019")
let compraCurso11: CompraCurso = new CompraCurso(curso5, estudiante7, "24/09/2019")
let compraCurso12: CompraCurso = new CompraCurso(curso5, estudiante10, "23/09/2019")

// pruebas

console.log(docente1);
console.log(docente2);

console.log(estudiante1);
console.log(estudiante10);
