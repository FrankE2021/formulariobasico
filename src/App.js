import {useForm} from "react-hook-form"
import "./App.css"
import { validadorEurekae } from "./validadorEurekae";


function App() {
  const {register,handleSubmit,formState:{errors},
  watch, setFocus, resetField} =useForm();
  const obtenerValores=(data)=>{
    console.table(data)
    resetField('telefono')
    setFocus('telefono')
  }
  return (
    <>
    <div className="contenedor">
      <form onSubmit={handleSubmit(obtenerValores)}>
        <div className="pregunta">
          <label htmlFor="nombre">Nombre: </label>
          <input id="nombre" placeholder="Tu nombre" autoFocus
          {...register('nombre',
          {
            required:true,
            maxLength:15
          }
          )}/>
        </div>
          {errors.nombre?.type === "required" && 
          <div className="aviso">El nombre de usuario es obligatorio</div>}
          {errors.nombre?.type === "maxLength" && 
          <div className="aviso">Maximo 15 caracteres</div>}

        <div className="pregunta">
          <label htmlFor="edad">Edad: </label>
          <input id="edad" type="number" placeholder="Tu edad"
          {...register('edad', 
          {
            min:1,
            max:120
          })}/>
        </div>
        {errors.edad?.type === "min" && 
          <div className="aviso">El valor minimo es 0</div>}
        {errors.edad?.type === "max" && 
          <div className="aviso">El valor maximo es 120</div>}

        <div className="pregunta">
          <label htmlFor="email">E-mail: </label>
          <input id="email" placeholder="Tu email" 
          {...register('email',
          {
            pattern:/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
          })}/>
        </div>
        {errors.email?.type === "pattern" && 
          <div className="aviso">El correo electrónico tiene una sintaxis errónea</div>}

        <div className="pregunta">
          <label htmlFor="telefono">Teléfono: </label>
          <input type="number" id="telefono" placeholder="Tu telefono" 
          {...register('telefono',
          {
            validate:validadorEurekae
          })}/>        
        </div>
        {errors.telefono?.type === "validate" && 
          <div className="aviso">El teléfono debe estar dentro de los números aceptados</div>}

        <div>
          <input type="submit"/>
        </div>

      </form>

      <div>
        {watch('nombre') && 
        <div className="resumen">Me llamo <strong>{watch
        ('nombre')}</strong>
        {watch('edad') && <span> y tengo <strong>{watch('edad')}</strong> años</span>}
        </div>
        }
      </div>
    </div>
    </>
  );
}

export default App;

