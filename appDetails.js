
const aplicacionDetalles=document.querySelector('.single-pro-details')
const imagen=document.querySelector('.single-pro-image')
const input = document.querySelector('.number')


const getUrl=new URLSearchParams(window.location.search)
id = getUrl.get('id')
const urls='https://api-proyecto-umg.herokuapp.com/productos'
console.log(`${urls}/${id}`)
fetch(`${urls}/${id}`)
.then(res=>res.json())
.then(data=>{



    const titulo=document.createElement('h6')
    titulo.innerText = "Computadoras"

    const nombre=document.createElement('h4')
    nombre.innerHTML=data.nombre

    const precio=document.createElement('h2')
    precio.innerHTML = "Q."+ data.precioUnidad +"0"

    const img = document.createElement('img')
    img.src= "compu1.jpg"

    const boton = document.createElement('button')
    boton.classList.add("normal")
    boton.innerText = "Agregar al carrito"
    
    const contenido=document.createElement('h4')
    contenido.innerHTML= "De alta gama"

    const descripcion=document.createElement('span')
    descripcion.innerHTML=data.descripcion

    imagen.appendChild(img)
    aplicacionDetalles.appendChild(titulo)
    aplicacionDetalles.appendChild(nombre)
    aplicacionDetalles.appendChild(precio)
    aplicacionDetalles.appendChild(input)
    aplicacionDetalles.appendChild(boton)
    aplicacionDetalles.appendChild(contenido)
    aplicacionDetalles.appendChild(descripcion)
})
.catch(err=>console.log(err))