import './App.css'
import { Sun } from './data/SolarSystem'
import { SolarSystem } from './components/SolarSystem'

function App() {
    return (
        <SolarSystem solarSystem={Sun} />
    )
}

export default App
