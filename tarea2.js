function unionIguales (array1, array2){
 

 const vectorUnion=[];

for (let i=0; i < array1.length; i++){
    if(array2.includes(array1[i])){
        vectorUnion.push(array1[i]);
    }
}
console.log(vectorUnion);
}


const Array1 = ['rojo', 'azul', 'amarillo'];
const Array2 = ['blanco', 'negro', 'rojo'];

unionIguales(Array1,Array2);
/*
const Array1 = [4, 3, true, 'manzana']
const Array2 = ['pera', 3, false, true, 3, true]

unionIguales(Array1,Array2);
*/