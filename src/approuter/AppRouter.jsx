import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import {Navbar} from '../componentes/Navbar.jsx'
import {AgregarAlumnoPage} from '../pages/AgregarAlumnoPage.jsx'
import { InicioPage } from '../pages/InicioPage.jsx'
import { AlumnosRoutes } from '../routes/AlumnosRoutes.jsx'

export const AppRouter = () => {
  return (
    <div>
      
         <Routes>
         <Route path="agregar" element={<AgregarAlumnoPage />} />
         <Route path="/*" element={<AlumnosRoutes />} />
      </Routes>
    </div>
  )
}