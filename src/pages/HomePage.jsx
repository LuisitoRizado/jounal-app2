import React from 'react'
import '../styes/HomePage.css'

export const HomePage = () => {
  return (
    
         <div className="landing-container">
         <div className="landing-text">
          <h1>!Ten el control de tus alumnos!</h1>
          <br />
          <br />
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            nobis, nemo minus at est aliquid, repellat sunt aut vel inventore,
            tempore eaque! Numquam aliquid fugiat dolorum provident magnam
            <br />
            laboriosam quod. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Commodi atque doloremque asperiores a cum libero itaque
            adipisci unde necessitatibus voluptate sapiente magni iure molestias
            harum, excepturi sequi suscipit debitis fugiat!
            <br />
          
          </p>
        </div>

        <div className="pokemon-image">
          <img src={require ('../imagenes/student.png')}  alt="" />
        </div>
      </div>
    
  )
}
