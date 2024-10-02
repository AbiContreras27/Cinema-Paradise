class CarritoCompra {
    constructor() {
        this.productos = [];
    }
    agregarProducto(producto) {
        if (typeof producto === "object" & !Array.isArray(producto)){
            this.productos.push(producto);
        } else {
            throw"Error: El producto debe de ser un objeto";
        }
    }
    calcularTotal () {
        return this.productos.reduce((acumulador, producto) => {return producto.precio + acumulador}, 0);
    }

    aplicarDescuento (porcentaje) {
        if (typeof porcentaje !== "number")
            throw "Error: El parametro debe ser numerico";
        if (this.productos.length === 0)
            throw "No se puede aplicar descuento, debido a que no hay productos";
        const total = this.calcularTotal();
        const descuento = (total * porcentaje) / 100;
        return total - descuento;
    }
}


module.exports = {CarritoCompra};