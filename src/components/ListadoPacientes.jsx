import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes}) => {

  return (
    <div className="md:w-1/2 lg:w3/5 md:h-screen overflow-scroll">

      {pacientes && pacientes.length ? (
        <>
        <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center"> Administra tus {''}
        <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
        </p>
              
        { pacientes.map( (paci) => ( 
          <Paciente
            key = {paci.id}
            paciente = {paci}
          /> 
        ) ) } 
        </>
        ) 
        
        : 
        
        <>
        <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center"> Comienza agregando tus pacientes {''}
        <span className="text-indigo-600 font-bold ">aqui apareceran</span>
        </p>
        </>
        
        }

      

      
    </div>
  )
}

export default ListadoPacientes
