import {registro} from "./dataregistro.js";

let mostrar=document.getElementById('mostrar')

mostrar.innerHTML=''

registro.forEach(regis => {
    const{nombre,apellidos,telefono,direccion,observaciones}= regis 
    mostrar.innerHTML+= `<div>
    <form action=""> <b>
    <label for="nombre">${nombre}</label>
    <input type="text" name="nombre" placeholder="Escribe tus nombres"> <br>
    <label for="apellido">${apellidos}</label>
    <input type="text" name="apellido" placeholder="Escribe tus apellidos" id="apellido"> <br>
    <label for="telefono">${telefono}</label>
    <input type="text" name="telefono" placeholder="Escribe tu telefono" id="telefono"><br>
    <label for="direccion">${direccion}</label>
    <input type="text" name="direccion" placeholder="Escribe tu direccion" id="direccion"><br>
    <br>
    <label for="observaciones">${observaciones}</label> <br>
    <br>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <br>
    </div>
              
    `
})

