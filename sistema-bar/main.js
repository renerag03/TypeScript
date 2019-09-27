"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    Bar.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Bar.prototype.getNombre = function () {
        return this.nombre;
    };
    Bar.prototype.setCapacidad = function (cap) {
        this.capacidad = cap;
    };
    Bar.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, ape) {
        this.nombre = nom;
        this.apellido = ape;
    }
    BarMan.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    BarMan.prototype.getNombre = function () {
        return this.nombre;
    };
    BarMan.prototype.setApellido = function (ape) {
        this.apellido = ape;
    };
    BarMan.prototype.getApellido = function () {
        return this.apellido;
    };
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nom, _color, cap) {
        this.nombre = nom;
        this.color = _color;
        this.capacidad = cap;
    }
    Trago.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Trago.prototype.getNombre = function () {
        return this.nombre;
    };
    Trago.prototype.setColor = function (_color) {
        this.color = _color;
    };
    Trago.prototype.getColor = function () {
        return this.color;
    };
    Trago.prototype.setCapacidad = function (cap) {
        this.capacidad = cap;
    };
    Trago.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    return Trago;
}());
exports.Trago = Trago;
var bar1 = new Bar("Nueva Era", 50);
var bar2 = new Bar("El patio", 200);
console.log(bar1);
console.log(bar2);
var barMan1 = new BarMan("Ruben", "Mejia");
var barMan2 = new BarMan("Jhonny", "Lujan");
console.log(barMan1);
console.log(barMan2);
var trago1 = new Trago("Ginebra", "Gris", 100);
var trago2 = new Trago("Vodka", "Blanco", 150);
console.log(trago1);
console.log(trago2);
bar1.setNombre("Pueblito");
console.log(bar1.getNombre());
bar1.setCapacidad(30);
console.log(bar1.getCapacidad());
bar2.setNombre("El Osisto");
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
trago1.setNombre("Baileys");
console.log(trago1.getNombre());
trago1.setColor("Chocolate");
console.log(trago1.getColor());
trago1.setCapacidad(200);
console.log(trago1.getCapacidad());
trago2.setNombre("Whiskey");
console.log(trago2.getNombre());
trago2.setColor("Blanco");
console.log(trago2.getColor());
trago2.setCapacidad(120);
console.log(trago2.getCapacidad());
