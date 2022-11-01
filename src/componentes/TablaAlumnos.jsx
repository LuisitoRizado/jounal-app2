import {React, useEffect, useState} from 'react'
import { todosLosAlumnos } from '../functions/todosLosAlumnos';
import axios from 'axios'
export const TablaAlumnos = () => {
    /*
    //Funcion que sirve para que podamos cargar los datos
    const cargarDatos = () => {
        fetch('http://localhost/empleados/')
        .then( respuesta => respuesta.json())
        .then(datosDeRespuesta => {console.log(datosDeRespuesta)})
        .catch(console.log("No se puedieron cargar los datos"));
    }
    //Mandamos a pedir los datos de la 
    //Api que creamos
    cargarDatos();
    //Una vez cargados los datos
    //Tenemos que mostrarlos en la tabla */
    //Creamos un useEffect para tener un control
    //Sobre que es lo queremos que pase despues de x evento
    
    //Creamos un estado con valor de null
    const [alumnos, setAlumnos] = useState(null)

    useEffect(() => {
        todosLosAlumnos(setAlumnos)
      }, [])
      const borrarRegistros = (nControl) =>{
        console.log('Alumno eliminado: ' +nControl);
        axios.post('http://localhost/empleados/?borrar='+nControl,{
         
         
       })
       //Ya lo borra, ahora solo actualiazamos el estado
       todosLosAlumnos(setAlumnos);
       //Metodos de nuestro fetch post
       
    }
  return (
    
    <table className="table table-striped  ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">N Control</th>
      <th scope="col">Nombre</th>
      <th scope="col">Semestre</th>
      <th scope="col">Carrera</th>
      <th scope="col">Materias</th>
      <th scope="col">Acciones</th>
    </tr>
    </thead>
    <tbody>
    {
        /*En esta parte del codigo realizaremos un
        mapeo para poder mostrar todos los 
        datos en la tabla de arriba */
       alumnos != null ? (alumnos.map(alumno =>(
        <tr className='animate__animated animate__fadeInDown'>
            <td scope="col">{alumno.nControl}</td>
            <td scope="col">{alumno.nombre}</td>
            <td scope="col">{alumno.semestre}</td>
            <td scope="col">{alumno.carrera}</td>
            <td> <button className='btn btn-primary mx-2' type='button'>Materias</button></td>
            <td><div className="btn-group" role="group">
           
            <button className='btn btn-warning' type='button'>Editar</button>
            <button className='btn btn-danger mx-2' type='button' onClick={()=>borrarRegistros(alumno.nControl)}>Borrar</button> 
             
        </div></td>
        </tr>
       ))): (console.log('no hay alumnos'))
        
    }
  
    
  </tbody>
</table>



  )
}

