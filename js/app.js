/* selectores */
const resultado = document.querySelector('#resultado')


/* event listeners */
document.addEventListener('DOMContentLoaded', initApp)


/* funciones */
function initApp()
{
    mostrarAutos()
}

function mostrarAutos()
{
    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto
        const autoHTML = document.createElement('P')
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `

        resultado.appendChild(autoHTML)
    })
}