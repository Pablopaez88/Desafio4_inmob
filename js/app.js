function renderizarPropiedades() {
    
    const ventaContainer = document.getElementById('propiedades_venta');
    propiedades_venta.slice(0, 3).forEach(prop => {
        ventaContainer.innerHTML += crearCardPropiedad(prop);
    });

   
    const alquilerContainer = document.getElementById('propiedades-alquiler');
    propiedades_alquiler.slice(0, 3).forEach(prop => {
        alquilerContainer.innerHTML += crearCardPropiedad(prop);
    });
}

function crearCardPropiedad(prop) {
    const esVenta = prop.costo > 100000;
    
    return `
        <div class="property">
            <img src="${prop.src}" alt="${prop.nombre}" class="property_image">
            <div class="property-content">
                <h3>${prop.nombre}</h3>
                <p>${prop.descripcion}</p>
                <ul class="property-details">
                    <li><span class="checkmark unchecked">✗</span> ${prop.ubicacion}</li>
                    <li><span class="checkmark checked">✓</span> ${prop.habitaciones} Habitaciones</li>
                    <li class="price">${esVenta ? '$' : '$ '}${prop.costo.toLocaleString()}</li>
                    <li><span class="checkmark ${prop.smoke ? 'checked' : 'unchecked'}">${prop.smoke ? '✓' : '✗'}</span> ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}</li>
                    <li><span class="checkmark ${prop.pets ? 'checked' : 'unchecked'}">${prop.pets ? '✓' : '✗'}</span> ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</li>
                </ul>
            </div>
        </div>
    `;
}


document.addEventListener('DOMContentLoaded', renderizarPropiedades);