import React, { useState, useEffect } from 'react'
import ColorBlock from './ColorBlock'
import AddColor from './AddColor';
import { FaPlus } from "react-icons/fa";
import ColorsPalette from './ColorsPalette';

function ColorCanvas(props) {
    const [addColor, setAdd] = useState(false)


    return (
        <div className="canvas">
            {props.color_curds.map((curd, i) =>
                <div>
                    <ColorBlock
                        key={i} color_curd={curd}
                        deleteColor={props.deleteColor} updateColor={props.updateColor}
                         colors={props.colors}>
                    </ColorBlock>
                    <label>{curd.id}</label>
                    <label>{curd.text}</label>
                    <label>{curd.colorIndex}</label>
                </div>
            )}
            <div className='curd'>
                <div className={(addColor) ? 'p-4 rounded shadow-sm bg-light' : 'curd-content'} onClick={() => { setAdd(true) }}>
                    {(!addColor) && <FaPlus />}
                    {(addColor) && <AddColor createColor={props.createColor} addColor={addColor} colors={props.colors} setAdd={setAdd}/>

                    }
                </div>
            </div>
        </div>
    )
}

export default ColorCanvas