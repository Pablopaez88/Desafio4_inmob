document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('propiedades_venta');
    
    function crearCardPropiedad(prop) {
        return `
            <div class="property">
                <img src="${prop.src}" alt="${prop.nombre}" class="property_image">
                <div class="property-content">
                    <h3>${prop.nombre}</h3>
                    <p>${prop.descripcion}</p>
                    <ul class="property-details">
                        <li><span class="checkmark unchecked">✗</span> ${prop.ubicacion}</li>
                        <li><span class="checkmark checked">✓</span> ${prop.habitaciones} Habitaciones</li>
                        <li class="price">$${prop.costo.toLocaleString()}</li>
                        <li><span class="checkmark ${prop.smoke ? 'checked' : 'unchecked'}">${prop.smoke ? '✓' : '✗'}</span> ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}</li>
                        <li><span class="checkmark ${prop.pets ? 'checked' : 'unchecked'}">${prop.pets ? '✓' : '✗'}</span> ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</li>
                    </ul>
                </div>
            </div>
        `;
    }

    propiedades_venta.forEach(prop => {
        container.innerHTML += crearCardPropiedad(prop);
    });
});