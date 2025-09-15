import './Slider.css'

export const Slider = (props: {
    label: string | undefined,
    min: number,
    max: number,
    step: number | undefined,
    onChange: ((v: number) => void) | undefined
}) => {
    return (
        <>
            <div className="input">
                {props.label && <label htmlFor='time-scale'>{props.label}</label>}
                <input
                    name='time-scale'
                    type="range"
                    min={props.min}
                    max={props.max}
                    step={props.step}
                    onChange={e => props.onChange && props.onChange(Number.parseFloat(e.target.value))}>
                </input>
            </div>
        </>
    )
}