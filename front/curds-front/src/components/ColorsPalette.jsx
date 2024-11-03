import React from 'react'

function ColorsPalette(props) {

    return (
        <div className='colors-palette curd-control'>
            {props.colors.map((color, i) => {
                return (<div key={i} className='color' style={{
                    backgroundColor: color.color
                }} onClick={(e) => {
                    if(props.curd.id===-1)
                    props.setColor({id:-1, text: props.curd.text, colorIndex:i})
                    else props.updateColor({id: props.curd.id, text: props.curd.text, colorIndex:i})
                    console.log(i);
                    props.setUpdate(false)
                }}>

                </div>)
            }
            )}
        </div>
    )
}

export default ColorsPalette