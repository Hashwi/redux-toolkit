import React, { useState } from 'react'

export default function ChangeColor() {

    const [color, setColor] = useState('')
    return (
        <div>
            <input
                type='text'>
                onChange = {((event) => {
                    setColor(event.target.value)
                })}

            </input>
            <button>Change Color</button>
        </div>
    )
}
