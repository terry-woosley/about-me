
function getPlanetURI(){
    let planetNum = Math.floor(Math.random() * (61 - 1 + 1)) + 1;
    let planetURI = "https://swapi.co/api/planets/" + String(planetNum) + "/?format=json"
    return planetURI
}

//fetch planet info
const getPlanetName = async (planet) => {
    try {
        console.log(`FETCHED. Response JSON ${planet}`)
        const planetName = planet.name || 'No planet name for you.'
        return planetName
    } 
    catch (error){
        console.error(error) 
    }
}

const getPlanetClimate = async (planet) => {
    try {
        console.log(`FETCHED. Response JSON ${planet}`)
        const planetClimate = planet.climate || 'No planet name for you.'
        return planetClimate
    } 
    catch (error){
        console.error(error) 
    }
}

// interact with DOM
const updateWithPlanet = async (event) => {
    try {
        const response = await fetch(getPlanetURI())
        const planet = await response.json()

        document.querySelector('#planetName').innerHTML = ''
        const planetN = await getPlanetName(planet)
        document.querySelector('#planetName').innerHTML = planetN

        document.querySelector('#planetClimate').innerHTML = ''
        const planetC = await getPlanetClimate(planet)
        document.querySelector('#planetClimate').innerHTML = planetC
    } 
    catch (error){
         console.error(error)
    }
}

document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getPlanetButton') { updateWithPlanet(event) }
})
