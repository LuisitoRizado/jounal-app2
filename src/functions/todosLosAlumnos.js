import axios from 'axios'

export const todosLosAlumnos = async (state) =>{
    const peticion = await axios.get('http://localhost/empleados/');
    state(peticion.data);

}
