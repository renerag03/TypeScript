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
     private precio: string;
     private descripcion: Direccion[];
     private docente: Docente;
     
     public constructor(n: string, p: string, d: Direccion[], doc: Docente)
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
     private direccion: Direccion[];

     public constructor(nom: string, ape: string, cor: string, dir: Direccion[])
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
     private direccion: string;

     public constructor(nom: string, ape: string, pro: string, cor: string, dir:string)
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