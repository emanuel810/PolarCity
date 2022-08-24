const url='https://api-proyecto-umg.herokuapp.com/clientes'

var usuario = document.getElementById("email")
var telefono = document.getElementById("contrasena")
var boton = document.getElementById("boton")

function preguntar(){
    fetch(url)
    .then(res => res.json())
    .then(data =>{

        
        data.forEach(usuario => {
            const nombre = usuario.email
            const telefonoA = usuario.telefono
            console.log(nombre)
            console.log(telefonoA)
            if(nombre==usuario){
                if(telefono==telefonoA){
                    window.location.href="index.html"
                    
                }
            }else{
                console.log("Error")
            }
        });

    })
    .catch(err => console.log(err))
}

function verificar(){
  
    preguntar()

}

