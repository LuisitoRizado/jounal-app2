import React from 'react'
import { Navbar } from '../componentes/Navbar.jsx';
import { Route,Routes,Navigate } from 'react-router-dom'

import { AgregarAlumnoPage } from '../pages/AgregarAlumnoPage';
import { EditarAlumnosPage } from '../pages/EditarAlumnosPage.jsx';
import { CrearAlumnoPage } from '../pages/CrearAlumnoPage';
import { HomePage } from '../pages/HomePage.jsx';
export const AlumnosRoutes = () => {
  return (
    <div>
        <Navbar/>
        <div className='contenedor'>
        <Routes>
        <Route path="/agregar" element={<AgregarAlumnoPage />} />
        <Route path="/agregar/crear" element={<CrearAlumnoPage />} />
        <Route path="/editar" element={<EditarAlumnosPage />} />
        <Route path="/inicio" element={<HomePage />} />
         {/*Search y hero by id */}
        <Route path="/" element={<Navigate to="/inicio"/>} />
      </Routes>
      </div>
    </div>
  )
}
