export class Bar
{
    private nombre: string;
    private capacidad: number;
    
    constructor(nom: string, cap: number)
    {
        this.nombre = nom;
        this.capacidad = cap;
    }

    public setNombre(nom: string): void
    {
      this.nombre = nom;
    }

    public getNombre(): string
    {
        return this.nombre;
    }

    public setCapacidad(cap: number): void
    {
      this.capacidad = cap;
    }

    public getCapacidad(): number 
    {
        return this.capacidad;
    }
}

export class BarMan
{
    private nombre: string;
    private apellido: string;
    
    constructor(nom: string, ape: string)
    {
        this.nombre = nom;
        this.apellido = ape;
    }

    public setNombre(nom: string): void
    {
        this.nombre = nom;
    }

    public getNombre(): string
    {
        return this.nombre;
    }

    public setApellido(ape: string): void
    {
        this.apellido = ape;
    }

    public getApellido(): string
    {
        return this.apellido;
    }
}
export class Trago
{
    private nombre: string;
    private color: string;
    private capacidad: number;

    constructor(nom: string, _color: string, cap: number)
    {
        this.nombre = nom;
        this.color = _color;
        this.capacidad = cap;
    }

    public setNombre(nom: string): void
    {
        this.nombre = nom;
    }

    public getNombre(): string
    {
        return this.nombre;
    }

    public setColor(_color: string): void
    {
        this.color = _color;
    }

    public getColor(): string
    {
        return this.color;
    }

    public setCapacidad(cap: number): void
    {
        this.capacidad = cap;
    }

    public getCapacidad(): number
    {
        return this.capacidad;
    }
}
let bar1: Bar = new Bar("Nueva Era", 50);
let bar2: Bar = new Bar("El patio", 200);
console.log(bar1);
console.log(bar2);
let barMan1: BarMan = new BarMan("Ruben", "Mejia");
let barMan2: BarMan = new BarMan("Jhonny", "Lujan")
console.log(barMan1);
console.log(barMan2);
let trago1: Trago = new Trago("Ginebra", "Gris", 100 );
let trago2: Trago = new Trago("Vodka", "Blanco", 150 );
console.log(trago1);
console.log(trago2);


bar1.setNombre("Pueblito");
console.log(bar1.getNombre());

bar1.setCapacidad(30);
console.log(bar1.getCapacidad());

bar2.setNombre("El Osisto")
console.log(bar2.getNombre());

bar2.setCapacidad(35);
console.log(bar2.getCapacidad());

barMan1.setNombre("Juan");
console.log(barMan1.getNombre());

barMan1.setApellido("Perez");
console.log(barMan1.getApellido());

barMan2.setNombre("Maria");
console.log(barMan2.getNombre());

barMan2.setApellido("Salazar");
console.log(barMan2.getApellido());

trago1.setNombre("Baileys")
console.log(trago1.getNombre());

trago1.setColor("Chocolate");
console.log(trago1.getColor());

trago1.setCapacidad(200);
console.log(trago1.getCapacidad());

trago2.setNombre("Whiskey")
console.log(trago2.getNombre());

trago2.setColor("Blanco");
console.log(trago2.getColor());

trago2.setCapacidad(120);
console.log(trago2.getCapacidad());








