var nombreAdd = document.getElementById("nombre")
var precioAdd = document.getElementById("precio")
var descripAdd = document.getElementById("descrip")
var existenciaAdd = document.getElementById("existencia");

const url='https://api-proyecto-umg.herokuapp.com/productos';



var data = {
    nombre: "Huawei22A",
    precioUnidad: "2500",
    unidadMedida: "unidad",
    existencia: 1,
    descripcion: "esta algo golpeado de la pantalla",
    fechaCreacion: null,
    fechaVencimiento: null
}
  
function agregarProducto(){
    agregar()
}

function agregar(){
    fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

}
