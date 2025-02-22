// Calcular el total en una factura con un solo item
// Calcular el total en una factura con varios items
// Manejar correctamente una lista vacia de items

// [{ name: "Producto A", price: 10, quantity: 2}]

const {calcularTotal} = require("../index");

describe ("La función calcularTotal", () => {
    it ("Debe calcular el total de una factura con un solo item", () => {
        expect(calcularTotal([{ name: "Producto A", price: 10, quantity: 2}])).toEqual(20);
    });

    it ("Debe Calcular el total en una factura con varios items", () => {
        expect(calcularTotal([
            {name: "Producto A", price: 10, quantity: 2},
            {name: "Producto B", price: 20, quantity: 3},
            {name: "Producto C", price: 30, quantity: 4},
        ])
    ).toEqual(200);
    });
        
    it ("Debe arrojar un error 'Factura inválida' en caso de recibir un arreglo vacío", () => {
        expect(() => calcularTotal([])).toThrowError("Factura Inválida");
    });
});