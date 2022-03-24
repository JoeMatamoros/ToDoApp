import React, { useEffect } from 'react'

export const Message = () => {
    useEffect(() => {
      console.log('componente montado');
     window.addEventListener('mousemove',(e)=>{console.log(e)})
    
      return () => {
        console.log('componente desmontado')
      }
    }, [])
    
  return (
    <>
     <h3>Hola</h3>   
    </>
  )
}
