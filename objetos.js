/*
let estudiantes = {
    //clave: valor
    nombre: 'Bauti',
    DNI: 49392698,
    direccion: 'calle 237',
    fecheNacimiento: '25 de marzo del 2009'
}
*/


let jugadoresCity = [ {
    nombre: 'Federico',
    apellido: 'Laurnagaray',
    numero: 14,
    nacionalidad:'N/A'
},
{
nombre: 'Agustin',
apellido: 'Kramer',
numero: 14,
nacionalidad:'N/A'
}, 
{
nombre: 'Antonio',
apellido: 'Hernandez',
numero: 14,
nacionalidad:'N/A'
}
]
console.log(jugador.nombre + '' +jugador.apellido)

let estudiante = [ {
    nombre: 'Maximo',
    apellido: 'Uriguen',
    colordePelo: 'rojo',
    notaExamen: 10
},{
    nombre: 'Maximo',
    apellido: 'Uriguen',
    colordePelo: 'rojo',
    notaExamen: 3
}
] 

console.log(estudiantesIVT[1].nombre + ' se saco un ' + estudiantesIVT[1].notaExamen)


/*nombre apellido edad y nota de examen
Arreglo de objetos*/
 let estudiantes = [ {
     nombre: 'Antonella',
     apellido: 'Lattandi',
     edad: 16,
     notaExamen: 8.50
 }, 
 {
    nombre: 'Damaris',
    apellido: 'Vilagas',
    edad: 16,
    notaExamen: 9
},  {
    nombre: 'Matias',
    apellido: 'Rosello',
    edad: 16,
    notaExamen: 8
},  {
    nombre: 'Jeronimo',
    apellido: 'Orfila',
    edad: 16,
    notaExamen: 5
},  {
    nombre: 'Agustin',
    apellido: 'Avila',
    edad: 16,
    notaExamen: 10
}
 ]

 for (let indice = 0; indice < estudiantes.length; indice++) {
     //mostrar todos los elementos del arreglo
     console.log(estudinates[indice].apellido + ' ' + estudiantes[indice].nombre)
 }