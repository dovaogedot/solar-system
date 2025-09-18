import React, { useRef, useState } from "react"
import "./SolarSystem.css"
import { Planet } from "./Planet"
import { Slider } from "./Slider"
import { Wiki } from "./Wiki"


export const SolarSystem = (props: {
    solarSystem: SolarSystemData
}) => {

    const sun = props.solarSystem

    const sizeFunc = (size: number) => Math.pow(size, 0.4) * zoom / 500
    const distFunc = (dist: number) => Math.log(dist + 1) * zoom

    const [zoom, setZoom] = useState(192)
    const dragging = useRef(false)

    const [sunX, setSunX] = useState(window.innerWidth / 2)
    const [sunY, setSunY] = useState(window.innerHeight / 2)

    const [time, setTime] = useState(1)

    const [selectedPlanet, setSelectedPlanet] = useState(sun.planets[3])
    const [wikiHidden, setWikiHidden] = useState(true)

    const movedRef = useRef(false)

    return (
        <div>
            <div className="options">
                <Slider label={"Time"} min={0} max={1} step={0.01} onChange={setTime} />
            </div>

            <Wiki planet={selectedPlanet} hidden={wikiHidden} />

            <div className="drag-area"
                onMouseDown={_ => {
                    movedRef.current = false
                }}

                onMouseUp={_ => {
                    if (!movedRef.current) {
                        setWikiHidden(true)
                    }
                }}

                onMouseMove={e => {
                    movedRef.current = true

                    if (e.buttons == 1) {
                        setSunX(x => x + e.movementX)
                        setSunY(y => y + e.movementY)
                    }
                }}

                onWheel={e => {
                    setZoom(x => x * (e.deltaY < 0 ? 1.1 : 0.9))
                }}>


                <div className="sun" style={{
                    "--radius": sizeFunc(sun.radius) + "px",
                    "--color": sun.color,
                    "--time": time,
                    "left": sunX + "px",
                    "top": sunY + "px"
                } as React.CSSProperties}>
                    <div className="planet">
                        <div className="disk"></div>
                        <h5>Sun</h5>

                        {sun.planets.map(planet =>
                            <Planet key={planet.name}
                                data={planet}
                                sizeFunc={sizeFunc}
                                distFunc={distFunc}
                                onDiskClick={e => {
                                    setSelectedPlanet(planet)
                                    setWikiHidden(false)
                                    e.stopPropagation()
                                }
                                } />)}

                    </div>
                </div>
            </div>
        </div>
    )
}