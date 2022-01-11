import {peliculas} from "./data.js";

let mostrar=document.getElementById('mostrar')

mostrar.innerHTML=''

peliculas.forEach(peli => {
    const{name,imagen,pelicula,tarjeta}= peli 
    mostrar.innerHTML+= `
    <div class="card" style="background-color:#D3DEDC;<a href="./pelicula-1.html"</a>
    <a href="${tarjeta}" class="btn btn-primary">SELECCIONAR</a>
              <img src="${imagen}" class="card-img-top" alt="imagen-1">
              <div class="card-body">
                <center><b><h5 class="card-title">${name}</h5></b></center>
              </div>
              <div class="card-footer" >
                <center><small class="text-muted">${pelicula}</small></center>
              </div>          
    `
})
