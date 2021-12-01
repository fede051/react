import React from 'react';

var size = 250;
/* export default Prueba; */
function Prueba(props){
    return(
      <div className="card" style={{width: size + 'px'}}>
        <img className="card-img-top" src={props.imagenUrl} alt="Card image cap"/>
        <section className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.edad}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </section>
    </div>
    )
}
 

/*  export function Mostrar(){
   return(
    <>
      <h1>Cumplen hoy</h1>
      
      <div>
        <Recordar array={ESTUDIANTES}/>
      </div>
    </>
    )
} 
 */
const ESTUDIANTES = [
    {
      id:1,  
      nombre:"Federico",
      edad:"18",
      imagenUrl:"https://randomuser.me/api/portraits/men/16.jpg"
    },
    {
      id:2,
      nombre:"Carlos",
      edad:"19",
      imagenUrl:"https://randomuser.me/api/portraits/men/43.jpg",
      cumpleanos: new Date(1995,11,17)
    },
    {
      id:3,
      nombre:"Romina",
      edad:"20",
      imagenUrl:"https://randomuser.me/api/portraits/women/52.jpg"
    },
    {
      id:4,
      nombre:"Carla",
      edad:"19",
      imagenUrl:"https://randomuser.me/api/portraits/women/82.jpg"
    },
    {
      id:5,
      nombre:"Paula",
      edad:"23",
      imagenUrl:"https://randomuser.me/api/portraits/women/60.jpg"
    }
  ]

  export default function App(){
      return(
        <>
          <h1>Recordatorio de cumpleaños</h1>
          <div className="d-flex">
            <Lista array={ESTUDIANTES}/>
          </div>
        </>
      )
      
  }
  
  function Lista(datos){
    return (
      <>
      {datos.array.map((estudiante)=>{
        console.log(datos.array)
        const{nombre, imagenUrl, id, edad} = estudiante;
        return(
          <Prueba nombre={nombre} imagenUrl={imagenUrl} key={id} edad={edad}/>
        )
    })}
      </>
    )
  }

