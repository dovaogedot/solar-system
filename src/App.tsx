import './App.css'
import planets from './data/planets.json'
import { SolarSystem } from './components/SolarSystem'

function App() {
    return (
        <SolarSystem solarSystem={planets} />
    )
}

export default App
