import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      {
        [
          {id: 1, nome: "Kellen", email:  "kallen@email.com" ,
             curso: "JavaScript", media: 7.0},
          {id: 2, nome: "Maria", email:  "maria@email.com",
             curso: "JavaScript", media: 9.0},
          {id: 3, nome: "João", email:  "joao@email.com",
             curso: "JavaScript", media: 5.0},  
        ].map((aluno) => 
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.
            curso} media={aluno.media}/>
          )
          }
    </div>
  )
}

export default App