import React, { useEffect, useState } from 'react'
// import { IconName } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa6";
import ColorsPalette from './ColorsPalette';
function ColorBlock(props) {

    //color useState might be used instead of "props.color_curd" 
    //There is a problem with its auto render
    const [color, setColor] = useState(props.color_curd)
    // useEffect(()=>{
    //     props.color_curd = color
    // },[color])

    const [updateText, setUpdateText] = useState(false)
    const [updateColor, setUpdateColor] = useState(false)

    const deleteSelf = () => {
        console.log("delete", props.color_curd.id);
        props.deleteColor(props.color_curd.id)
    }
    console.log(color);

    return (

        <div className="curd" style={{
            backgroundColor: props.colors[props.color_curd.colorIndex].color
        }}>

            <div className='curd-content' key={props.text}>
                {
                    (updateText) ?
                        <input className='form-control'
                            value={color.text}
                            onChange={(e) => {
                                console.log(e.target.value);
                                setColor({ id: props.color_curd.id, text: e.target.value, colorIndex: props.color_curd.colorIndex })

                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    props.updateColor(color)
                                    setUpdateText(false)
                                }
                            }}
                        />
                        :
                        <span className='color-text' onClick={() => setUpdateText(true)}>{props.color_curd.text} </span>}
            </div>
            {
                (updateColor) &&
                <ColorsPalette updateColor={props.updateColor} curd={props.color_curd} setColor={setColor} setUpdate={setUpdateColor} colors={props.colors} />
            }
            {
                (!updateText && !updateColor) &&
                <div className='curd-control'>
                    <button className='btn btn-light' onClick={() => setUpdateColor(true)}><FaRegCircle /></button>
                    <button className='btn btn-light' onClick={deleteSelf}><BsTrash3 /></button>
                </div>
            }
        </div>
    )
}

export default ColorBlock