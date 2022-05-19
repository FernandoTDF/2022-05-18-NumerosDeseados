let nroDeseadoArreglo : number[] = new Array (5);
let nro : number, indice : number;

for (indice = 0; indice < 5; indice++) {
nro = Number(prompt(`Indique el número que desea incorporar en la posición ${indice}: `));
nroDeseadoArreglo[indice] = nro;
}
for (indice = 0; indice < 5; indice++) {
console.log(`El número en la posición ${indice} es ${nroDeseadoArreglo[indice]}`);
}

