
const {CarritoCompra} = require("../src");

let carrito
beforeEach(() => {carrito = new CarritoCompra() });

describe("Testeando Carrito de Compra", () => {
    test("Validando la instancia de la clase CarritoCompra", () => {
        expect(carrito).toBeInstanceOf(CarritoCompra)
    });
    test("Validando la función agregarProducto", () => {
        expect(() => carrito.agregarProducto("Hola")).toThrow("Error: El producto debe de ser un objeto");
        expect(() => carrito.agregarProducto(1)).toThrow("Error: El producto debe de ser un objeto");
        expect(() => carrito.agregarProducto([])).toThrow("Error: El producto debe de ser un objeto");
        expect(carrito.productos.length).toBe(0);
        carrito.agregarProducto({
            id: 1, 
            nombre: "Zapatos", 
            cantidad: 1, 
            precio: 100
        })
        expect(carrito.productos.length).toBe(1)
    });
    test("Validando la función calcularTotal", () => {
        expect(carrito.calcularTotal).toBeDefined()
        expect(carrito.calcularTotal).toBeInstanceOf(Function)
        carrito.agregarProducto({
            id: 1, 
            nombre: "Zapatos", 
            cantidad: 1, 
            precio: 100,
        });
        carrito.agregarProducto({
            id: 2, 
            nombre: "camisa", 
            cantidad: 1, 
            precio: 30,
        });
        const total = carrito.calcularTotal();
        expect(total).toBe(130);
    });
    test("Validando la función aplicarDescuento", () => {
        expect(carrito.aplicarDescuento).toBeInstanceOf(Function);
        expect(() => carrito.aplicarDescuento("Hola")).toThrow("Error: El parametro debe ser numerico");
        expect(() => carrito.aplicarDescuento({})).toThrow("Error: El parametro debe ser numerico");
        expect(() => carrito.aplicarDescuento([])).toThrow("Error: El parametro debe ser numerico");
        expect(() => carrito.aplicarDescuento(10)).toThrow("No se puede aplicar descuento, debido a que no hay productos");
        carrito.agregarProducto({
            id: 1, 
            nombre: "Zapatos", 
            cantidad: 1, 
            precio: 100,
         });
        carrito.agregarProducto({
            id: 2, 
            nombre: "camisa", 
            cantidad: 1, 
            precio: 30,
        });
        const totalConDescuento = carrito.aplicarDescuento(10)
        expect(totalConDescuento).toBe(117)
    });
});
