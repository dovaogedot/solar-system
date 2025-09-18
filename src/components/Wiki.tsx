import './Wiki.css'
import Property from './Property'


export const Wiki = (props: {
    planet: PlanetData,
    hidden: boolean,
}) => {
    
    return (
        <div className={"wiki" + (props.hidden ? " hidden" : "")}>
            <h1 className="name">{props.planet.name}</h1>
            <div className="model"></div>

            <div className="data">
                <Property 
                    name='Distance to Sun'
                    planet={props.planet}
                    path={'distance'}
                    unit='km' />
                <Property 
                    name='Mass'
                    planet={props.planet}
                    path={'mass'}
                    unit='kg' />
                <Property 
                    name='Radius'
                    planet={props.planet}
                    path={'radius'}
                    unit='km' />
                <Property 
                    name='Day Duration'
                    planet={props.planet}
                    path={'day'}
                    unit='h' />
                <Property 
                    name='Year Duration'
                    planet={props.planet}
                    path={'year'}
                    unit='h' />
                <Property 
                    name='Axial Tilt'
                    planet={props.planet}
                    path={'axialTilt'}
                    unit='°' />
            </div>

            <div className="description">
                Description
            </div>

        </div>
    )
}