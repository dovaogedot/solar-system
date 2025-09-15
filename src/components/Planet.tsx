export const Planet = (props: {
    data: PlanetData,
    sizeFunc: (s: number) => number,
    distFunc: (d: number) => number,
}) => {
    const planet = props.data
    const radius = props.sizeFunc(planet.radius)
    const distance = props.distFunc(planet.distance)

    return (
        <div key={planet.name} className="planet spin" data-name={planet.name} style={{
            "--radius": radius + "px",
            "--orbit": distance + "px",
            "--color": planet.color || "gray",
            "--orbit-speed": 365 / planet.orbitSpeed + "s"
        } as React.CSSProperties}>
            <div className="disk spin reverse">
                <h5>{planet.name}</h5>

                {planet.children.map(x =>
                    <Planet key={x.name}
                        data={x}
                        sizeFunc={x => props.sizeFunc(x) * 0.5}
                        distFunc={x => props.sizeFunc(planet.radius) + props.distFunc(x) * 16}
                    />)}
            </div>
        </div>
    )
}