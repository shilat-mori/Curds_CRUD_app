import { useState } from 'react'
import React from 'react'
import ColorsPalette from './ColorsPalette'
import { FaPlus } from 'react-icons/fa6'

function AddColor(props) {
    const [color, setColor] = useState({id:-1, text: '', colorIndex: 0 })
    // const [ text, setText] = useState('')
    const addNewColor = (e) => {
        e.preventDefault()
        props.createColor(color)
        props.setAdd(!props.addColor)
        setColor({id:-1, text: '', colorIndex: 0 })
        // setText('')
    }
    return (
        <form onSubmit={addNewColor}>
            <input type='text' className='form-control' required id='text' value={color.text} onChange={(e) => setColor({id:color.id,text: e.target.value, colorIndex:color.colorIndex})} />
            <ColorsPalette curd={color}colors={props.colors} setColor={setColor} setUpdate={(m)=>{}}></ColorsPalette>
            <button className='btn btn-light' type='submit' disabled={color.text === '' || color.colorIndex === -1} ><FaPlus /></button>
        </form>
    )
}

export default AddColor