import { useState } from "react"

export default function ColorComponent() {
    const [color, setColor] = useState('red');
    return (
        <>
            <div>ColorComponent</div>
            <div>My color is {color}</div>
            <button type="button" onClick={()=>setColor('green')}>Change Color</button>
        </>

    )
}
