let datos=JSON.parse(localStorage.getItem('usuario')) || []

const formulario = document.getElementById("formulario")

const listar = document.getElementById("listar")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let Nombres = document.getElementById("Nombres").value;
    let Apellidos = document.getElementById("Apellidos").value;
    let Telefono = document.getElementById("Telefono").value;
    let Direccion = document.getElementById("Direccion").value;
    let Observaciones = document.getElementById("Observaciones").value;


let registro = {
    Nombres :Nombres,
    Apellidos : Apellidos,
    Telefono: Telefono,
    Direccion: Direccion,
    Observaciones: Observaciones   
}

datos.push(registro)
console.log(datos)
localStorage.setItem("usuario",JSON.stringify(datos))
     listarDatos();

})
    const listarDatos = () => {
    listar.innerHTML=""
    datos = JSON.parse(localStorage.getItem("usuario"))
    datos.forEach(element => {
        const {Nombres,Apellidos,Telefono,Direccion,Observaciones} = element
        listar.innerHTML+= `<div class="card" style="width: 18rem;">
        <div class="card.body">
          <h5 class="card-title">${Nombres}</h5>
          <h6 class="card-subtitle mc-2 text-muted">${Apellidos}</h6>
          <h6 class="card-subtitle mc-2 text-muted">${Telefono}</h6>
          <h6 class="card-subtitle mc-2 text-muted">${Direccion}</h6>
          <h6 class="card-subtitle mc-2 text-muted">${Observaciones}</h6>
        </div>
      </div>`
        
  });
}

