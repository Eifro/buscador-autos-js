/* selectores */
const resultado = document.querySelector('#resultado')
const year = document.querySelector('#year')


/* event listeners */
document.addEventListener('DOMContentLoaded', initApp)


/* funciones */
function initApp()
{
    mostrarAutos()
    loadAnios()
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

function loadAnios()
{
    const max = new Date().getFullYear() // obtiene el año actual
    const min = max - 10
    for (let i = max; i > min; i--) {
        year.innerHTML += `
            <option value="${i}">${i}</option>
        `
    }
}