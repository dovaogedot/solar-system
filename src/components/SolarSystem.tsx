import React, { useEffect, useRef, useState } from "react"
import "./SolarSystem.css"
import { Planet } from "./Planet"


export const SolarSystem = (props: {
    solarSystem: SolarSystemData
}) => {

    const sun = props.solarSystem

    const sizeFunc = (size: number) => Math.pow(size, 0.4) * zoom / 500
    const distFunc = (dist: number) => Math.log(dist + 1) * zoom

    const [zoom, setZoom] = useState(192)
    const dragging = useRef(false)

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            setZoom(x => x * (e.deltaY < 0 ? 1.1 : 0.9))
        }

        const handleMouseDown = (e: MouseEvent) => {
            if (e.button == 0) dragging.current = true
        }

        const handleMouseUp = (e: MouseEvent) => {
            if (e.button == 0) dragging.current = false
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (dragging.current == true) {
                setSunX(x => x + e.movementX)
                setSunY(y => y + e.movementY)
            }
        }

        window.addEventListener("wheel", handleWheel, { passive: true })
        window.addEventListener("mousedown", handleMouseDown)
        window.addEventListener("mouseup", handleMouseUp)
        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("wheel", handleWheel)
            window.removeEventListener("mousedown", handleMouseDown)
            window.removeEventListener("mouseup", handleMouseUp)
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    const [sunX, setSunX] = useState(window.innerWidth / 2)
    const [sunY, setSunY] = useState(window.innerHeight / 2)

    return (
        <div>
            <div className="sun" style={{
                "--radius": sizeFunc(sun.radius) + "px",
                "--color": sun.color,
                "left": sunX + "px",
                "top": sunY + "px"
            } as React.CSSProperties}>
                <div className="disk">
                    <h5>Sun</h5>

                    {sun.planets.map(planet =>
                        <Planet key={planet.name}
                            data={planet}
                            sizeFunc={sizeFunc}
                            distFunc={distFunc} />)}

                </div>
            </div>
        </div>
    )
}