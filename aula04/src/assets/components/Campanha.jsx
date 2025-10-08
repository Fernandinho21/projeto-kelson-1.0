import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {
  
    function definirmensagem(mes) {
        if (mes === 11 || mes === 0 || mes === 1) {
            return "Feliz Natal e um próspero Ano Novo!"
        } else if (mes >= 2 && mes <= 4) {
            return "Feliz Páscoa!"
        } else if (mes >= 5 && mes <= 7) {
            return "Boas férias!"
        }
    }
  

    function definircor(mes) {
        if (mes === "OUTUBRO") {
            return styles.outubro
        } else if (mes === "ABRIL") {
            return styles.abril
        } else if (mes === "DEZEMBRO") {
            return styles.dezembro
        }

    return (
    <div>
        {definirmensagem(props.mes)}
    </div>
  )
}
}
export default Campanha 