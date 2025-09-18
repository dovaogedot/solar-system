import { Earth } from '../data/Earth'
import './Property.css'

type NumericalProps<T> = {
    [K in keyof T as T[K] extends number ? K : never]: T[K]
}

const Property = (props: {
    name: string,
    planet: PlanetData
    path: keyof NumericalProps<PlanetData>
    unit: string,
    absolute?: (n: number) => number,
    relative?: (n: number) => number
}) => {
    let abs = props.planet[props.path]
    let rel = (Earth[props.path] / props.planet[props.path])

    if (props.absolute) abs = props.absolute(abs)
    if (props.relative) rel = props.relative(rel)

    return (
        <div className="property">
            <div className="name">{props.name}</div>
            <div className="absolute">{abs.toFixed(2)} {props.unit}</div>
            <div className="relative">{rel.toFixed(2)} 🜨</div>
        </div>
    )
}

export default Property