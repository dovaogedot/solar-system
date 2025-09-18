export const Planet = (props: {
    data: PlanetData,
    sizeFunc: (s: number) => number,
    distFunc: (d: number) => number,
    onDiskClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}) => {
    const planet = props.data
    const radius = props.sizeFunc(planet.radius)
    const distance = props.distFunc(planet.distance)

    return (
        <div key={planet.name}
            className="orbit spin"
            data-name={planet.name}
            style={{
                "--radius": radius + "px",
                "--orbit": distance + "px",
                "--color": planet.color || "gray",
                "--orbit-speed": planet.year + "s"
            } as React.CSSProperties}>

            <div className="planet spin reverse">

                <div className="disk"
                    onClick={props.onDiskClick}>
                </div>

                <h5>{planet.name}</h5>

                {planet.moons.map(x =>
                    <Planet key={x.name}
                        data={x}
                        sizeFunc={x => props.sizeFunc(x) * 0.5}
                        distFunc={x => props.sizeFunc(planet.radius) + props.distFunc(x) * 16}
                        onDiskClick={props.onDiskClick}
                    />)}
            </div>
        </div>
    )
}