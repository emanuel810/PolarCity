const productos = document.querySelector('.pro-container')


const url='https://api-proyecto-umg.herokuapp.com/productos'


fetch(url)
.then(res => res.json())
.then(data =>{
    data.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add("pro")

        const div2 = document.createElement('div')
        div2.classList.add("des")

        const div3 = document.createElement('div')
        div2.classList.add("star")

        const estrella =document.createElement('i')
        estrella.innerHTML ="★★★★"

        const img = document.createElement('img')
        img.src= "compu1.jpg"

        const titulo =document.createElement('span')
        titulo.innerText ="Computadora"

        const nombre = document.createElement('h5')

        nombre.setAttribute('id', producto.idCliente)
        nombre.innerHTML = producto.nombre

        div.addEventListener('click', function(){
            window.location.href=`./sproduct.html?id=${producto.idProducto}`
        })
        
        const precio = document.createElement('h4')
        precio.innerHTML = "Q."+ producto.precioUnidad +"0"

        productos.appendChild(div)
        div.appendChild(img)
        div.appendChild(div2)
        div2.appendChild(titulo)
        div2.appendChild(nombre)
        div2.appendChild(div3)
        div3.appendChild(estrella)
        div2.appendChild(precio)

    
    });
})
.catch(err => console.log(err))