import React from 'react'
import { TablaAlumnos } from '../componentes/TablaAlumnos'
import {Link} from 'react-router-dom'
export const AgregarAlumnoPage = () => {
  return (
    <div className="card">
      <div className="card-header">
       <Link to={'crear'} className="btn btn-success">
        Agregar nuevo empleado
       </Link>
      </div>
      <div className="card-body">
        <h4>Lista de empleados</h4>
      <TablaAlumnos />
      </div>
    <div className="card-footer text-muted">

    </div>
    </div>
    
  )
}
