type SolarSystemData = {
    name: string
    radius: number
    mass: number
    color: string
    planets: PlanetData[]
}

type PlanetData = {
    name: string
    radius: number
    mass: number
    gravity: number
    distance: number
    tempMin?: number
    tempMean: number
    tempMax?: number
    year: number
    day: number
    axialTilt: number
    inclination: number
    color: string | undefined
    moonsTotal: number
    moons: PlanetData[]
}