import axios from 'axios';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const InvernaderoCrear = () => {

  const { register, handleSubmit, formState: { errors } ,setValue,setFocus } = useForm();
  const navigate = useNavigate()
  const {url} =useContext(UserContext)
  const loggedUser = window.localStorage.getItem('loggedUser')

    const onSubmit=(data)=>{
      const {id_usuario} = JSON.parse(loggedUser)
      axios.post(`${url}api/usuarios/${id_usuario}/invernaderos`,data)
      .then((response) =>{
        toast.success('Invernadero creado correctamente', {
          position: toast.POSITION.TOP_CENTER
        })
        const interval = setInterval(() => {
          navigate('/invernadero')
          clearInterval(interval)
        }, 6000);
      })
      .catch((error)=>{
          const {status, data:{message}} = error.response
          mensaje(message,status)
      })
    }

    const vaciarInput = ()=>{
      setValue("nombre",'')
      setValue('tamano','')
      setValue('ubicacion','')
      setFocus('nombre')
    }
  return (
    <>
    <div className='grid'>
      <h1 className='text-5xl font-semibold text-center py-10'>Invernadero</h1>
      <div className="grid justify-center rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='rounded-xl bg-white border border-gray-300 mb-5'>
            <div className='w-full bg-gray-100 rounded-t-lg p-4 border border-gray-300'>
              <h1 className='text-xl font-semibold'>Información general</h1>
            </div>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4 grid-flow-row'>
                <div className='flex flex-col text-[#505568] col-span-2'>
                    <label className='py-2 text-[#406343] font-bold'>Nombre</label>
                    <input  {...register("nombre", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Nombre"/>
                    {errors.nombre?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El nombre es requerido</p>}
                </div>
                <div className='flex flex-col text-[#505568] col-span-2'>
                    <label className='py-2 text-[#406343] font-bold'>Tamaño</label>
                    <input  {...register("tamano", {required:true}, )} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Tamaño"/>
                    {errors.tamano?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>El tamaño es requerido</p>}
                </div>
              </div>
              <div className='flex flex-col text-[#505568] py-2 w-full pb-5 p-4'>
                <label className='py-2 text-[#406343] font-bold'>Ubicacion</label>
                <input  {...register("ubicacion", {required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ubicación"/>
                {errors.ubicacion?.type==='required' && <p className='text-red-500 text-sm italic pt-4'>La ubicación es requerida</p>}
              </div>
          </div>

          <div className='flex justify-center items-center gap-16'>
            <button  type='submit' className='w-[250px] my-5 py-2 bg-[#406343] shadow-lg text-white font-semibold rounded-lg' >Ingresar</button>
            <button  onClick={vaciarInput} className='w-[250px] my-5 py-2 bg-red-500 hover:bg-red-600 shadow-lg text-white font-semibold rounded-lg' >Vaciar</button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default InvernaderoCrear;
