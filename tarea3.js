let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}




class  Carrito  {
    montoTotal= 0;
    productos= [];

    constructor(montoInicial,productosInicial){
    this.montoTotal= montoInicial;
    this.productos= productosInicial;
    }

    agregarProducto(nombre, precio, unidades) {
        // Completar aca...
        let preciofinal= precio * unidades;
        
        if(this.productos.includes(nombre)){   
            console.log("ESTE PRODUCTO YA EXISTE");
        }
        else {
            this.productos.push(nombre);
            this.montoTotal += preciofinal;  

        }
             

    }

    
}

const carrito2 = new Carrito(10, ["Leche"]);
console.log(carrito2);
console.log(" MONTO TOTAL: " + carrito2.montoTotal + " PRODUCTOS: " + carrito2.productos);

carrito2.agregarProducto("Azucar",5,2);
console.log(carrito2);
console.log(" MONTO TOTAL: " + carrito2.montoTotal + " PRODUCTOS: " + carrito2.productos);

carrito2.agregarProducto("YERBA",5,2);
console.log(carrito2);
console.log(" MONTO TOTAL: " + carrito2.montoTotal + " PRODUCTOS: " + carrito2.productos);






