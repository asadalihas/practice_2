import React from 'react'
const Card = (props) => {
  return (
    <div style={{
         display:'flex',
         color: 'black',
         justifyContent:'space-evenly',
         backgroundColor:'lightskyblue',
         alignItems:'center',
         margin:'200px',
         borderRadius:'12px',
         gap:'5px',
         height:'160px'
         }} >{props.children}</div>
  )
}

export default Card
