import {React,useState} from 'react'
import '../styes/CrearAlumnoPage.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
export const CrearAlumnoPage = () => {
    
   /* const [datos, setDatos] = useState({
        //Estado inicial de nuestro componente
        nombre:"",
        nControl:""
    });
    //Metodo que nos sirve para enviar los dato, para comprobar que esto se cunmple
    //metemos los datos en un console log

    const enviarDatos = (e) =>{
        const nuevosDatos = {...datos};
        nuevosDatos.nombre = datos.nombre;
        nuevosDatos.nControl = datos.nControl;
        //Exposicion de los datos
       console.log(nuevosDatos.nombre)
       console.log(nuevosDatos.nControl)
       
    }
    
    //Metodo que nos sirve para ir cambbiando el estado de cada
    //input, o sea poder escribir
    const cambioValor = ({target}) =>{
        const state = datos;
        state[target.name] =target.value;
        setDatos(target.value);
        console.log(target.value);
    }
  /*const [inputValue, setInputValue] = useState();

  const onInputChanged = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    //setCategorires(.....)
    if(inputValue.trim().length<=1) return;

    //setCategory(categories => [inputValue,...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  }*/ 
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState({
    nControl:0,
    nombre:'',
    semestre:0,
    carrera:''

  });
  //Metodo que permite capturar
  const handleChange = e =>{
    const {name,value} = e.target;
    setAlumnoSeleccionado((prevState)=>({
        ...prevState,
        [name]:value,
    }))
    console.log(alumnoSeleccionado)
  }
  const peticionPost = (e) => {
    console.log('Formulario envaido');
    const{nControl,nombre,semestre,carrera} = alumnoSeleccionado;
    let datosEnviar = {
         nControl:nControl,
         nombre:nombre,
         semestre:semestre,
         carrera:carrera
        }
        //Hay que validar los datos
        if(validarDatos){
    //await axios.post('http://localhost/empleados/?insertar=1',{method:'POST',body:JSON.stringify(datosEnviar)})
    axios.post('http://localhost/empleados/?insertar=1',{
       method:"POST",//Metodo post para enviar datos
       nControl:alumnoSeleccionado.nControl,
       nombre:alumnoSeleccionado.nombre,
       semestre:alumnoSeleccionado.semestre,
       carrera:alumnoSeleccionado.carrera,
       

    })//Metodos de nuestro fetch post
    //Hay que limpiar las cajas de texto
    document.getElementById('nombre').value='';
    document.getElementById('control').value='';
    document.getElementById('semestre').value='';
    document.getElementById('carrera').value='';
}
else{
    window.alert('Por favor completa todos los campos')
}
    
}
const validarDatos = () =>{
    //Este metodo es construido para poder validar datos del formaulario donde envairremos datos
    //Primero checaremos que los datos de la caja del texto no esten vacios
    //Obtenemos los elementos (Las 4 cajas de texto)
    const cajaControl = document.getElementById('nombre');
    const cajaNombre = document.getElementById('control');
    const cajaSemestre = document.getElementById('semestre');
    const cajaCarrera = document.getElementById('carrera');

    //Ahora si empezamos con la validacion de las cajas de texto
    if((cajaControl.value != '') && (cajaNombre.value !='') && (cajaSemestre.value !='') && (cajaCarrera.value !=''))
    {//Este primer caso es cuando existen datos en todos los campos de texto
     //En caso de que se cumpla, pues podemos llamar al metodo que manda los datos
     
     return true;
    }
    else{
        //En caso de que no se cumpla, mandamos una alerta al usuario de que no es posible
        //Enviar los datos porque no tienen informacion
        
        return false;
    }
}
    
  return (
    <div className='contenedor-agregar'>
        <div className="card text-center">
    <div className="card-header">
      Insertar alumno
    </div>
    <div className="card-body">
      <form action="" >
        <div className="form-group">
            <label htmlFor=''>Número de control:</label>
            <input type="text" name="nControl" id="nombre"  placeholder='' className='form-control' onChange={handleChange}/>
            <br />
            <small id='helpId' className='text-muted' >Escribe el nombre del alumno</small>
        </div>

        <div className="form-group">
            <label htmlFor=''>Nombre:</label>
            <input type="text" name="nombre" id="control" placeholder='' className='form-control'onChange={handleChange} />
            <br />
            <small id='helpId' className='text-muted' >Escribe el numero de control del alumno</small>
        </div>
        <div className="form-group">
            <label htmlFor=''>Semestre:</label>
            <input type="text" name="semestre" id="semestre"  placeholder='' className='form-control' onChange={handleChange}/>
            <br />
            <small id='helpId' className='text-muted' >Escribe el nombre del alumno</small>
        </div>
        <div className="form-group">
            <label htmlFor=''>Carrera:</label>
            <input type="text" name="carrera" id="carrera"  placeholder='' className='form-control' onChange={handleChange}/>
            <br />
            <small id='helpId' className='text-muted' >Escribe el nombre del alumno</small>
        </div>
        <div className="btn-group" role="group">
           
            <button className='btn btn-success' type='button' onClick={peticionPost}>Agregar nuevo alumno</button>

            <Link to={"/agregar"} className="btn btn-danger">
            Cancelar
            </Link>
        </div>
      </form>
    </div>
    <div className="card-footer text-muted">
      Instituto tecnológico de saltillo
    </div>
  </div>
    </div>
  )
}
