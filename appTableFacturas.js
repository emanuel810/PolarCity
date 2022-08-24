const productos = document.querySelector('.inventario')


const url='https://api-proyecto-umg.herokuapp.com/facturas'


fetch(url)
.then(res => res.json())
.then(data =>{
    data.forEach(producto => {
        const div = document.createElement('tr')
        

        const id = document.createElement('td')
        id.innerHTML = producto.idProducto

        const nombre = document.createElement('td')

        nombre.setAttribute('id', producto.idCliente)
        nombre.innerHTML = producto.nombre

        div.addEventListener('click', function(){
            window.location.href=`./sproductInventary.html?id=${producto.idProducto}`
        })
        
        const precio = document.createElement('td')
        precio.innerHTML = "Q."+ producto.precioUnidad +"0"
        const num1 = Number(producto.precioUnidad)

        const cantidad = document.createElement('td')
        cantidad.innerHTML = producto.existencia
        const num2 = Number(producto.existencia)


        const fecha = document.createElement('td')
        fecha.innerHTML = producto.fechaCreacion

        const total = document.createElement('td')
        const resultado = String(num1*num2)
        total.innerText = "Q."+resultado+".00"

        productos.appendChild(div)
        div.appendChild(id)
        div.appendChild(nombre)
        div.appendChild(precio)
        div.appendChild(cantidad)
        div.appendChild(fecha)
        div.appendChild(total)
    });
})
.catch(err => console.log(err))