const respuesta = fetch('./json/datos.json')
.then(respuesta => respuesta.json())
//respuesta.then(datos=>console.log(datos));
.then(datos => mostrarProductos(datos));

const mostrarProductos = (datos) => {
    let productos = "";
    const contenedor = document.querySelector('#contenedor');
    datos.forEach(dato => {
        productos += `
        <div class="card m-2" style="width: 100%; max-width: 250px;">
              <img src=${dato.imagen} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${dato.titulo}</h5>
                <p class="card-text">${dato.descripcion}</p>
                <a href="#" class="btn btn-primary">Aprende Mas</a>
              </div>
        </div>
        `;

    }

    );
    contenedor.innerHTML = productos;
}