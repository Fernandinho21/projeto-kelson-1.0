import React from 'react'

const RenderizandosComFuncoes = () => {
  
    function oQueRenderizar() {
        if(estado === "PB") {
            return <h1>João pessoa</h1>
        } else {
            return <h2>Recife</h2>
        }
    }

    return (
    <div>
        {oQueRenderizar("PE")}
    </div>
  )
}

export default RenderizandosComFuncoes