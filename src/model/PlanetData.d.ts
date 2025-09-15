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
    distance: number
    orbitSpeed: number
    rotationSpeed: number
    tilt: number
    color: string | undefined
    children: PlanetData[]
}