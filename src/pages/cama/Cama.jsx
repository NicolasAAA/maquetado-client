import React from 'react'
import { RiSoundcloudLine } from "react-icons/ri";
import ReactDOM from 'react-dom'
import Progress from './lib/progress'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Camas = () => {

    
    const data = [
      {
        name: 'Miercoles',
        uv: 4000,
        ppm: 2400,
        amt: 2400,
      },
      {
        name: 'Jueves',
        uv: 3000,
        ppm: 1398,
        amt: 2210,
      },
      {
        name: 'Viernes',
        uv: 80,
        ppm: 120,
        amt: 2290,
      },
      {
        name: 'Sabado',
        uv: 2780,
        ppm: 3908,
        amt: 2000,
      },
      {
        name: 'Domingo',
        uv: 1890,
        ppm: 4800,
        amt: 2181,
      },
      {
        name: 'Lunes',
        uv: 2390,
        ppm: 3800,
        amt: 2500,
      },
      {
        name: 'Martes',
        uv: 3490,
        ppm: 4300,
        amt: 2100,
      },
    ];


  const [p1,setp1] = React.useState(0)
  const [p2,setp2] = React.useState(0)
  const [p3,setp3] = React.useState(0)
  const [p4,setp4] = React.useState(0)
  const [play, setPlay] = React.useState(true)
  const playRef = React.useRef()
  playRef.current = play

  React.useEffect(() => {
    setp1(p => Math.random() * 100)
    setInterval(() => playRef.current && setp1(p => Math.round(Math.random() * 100)), 200)
    setInterval(() => playRef.current && setp2(p => Math.random() * 100), 1000)
    setInterval(() => playRef.current && setp3(p => Math.random() * 100), 1000)
    setInterval(() => playRef.current && setp4(p => Math.random() * 100), 1000)
  }, [])

  return (
    <>
    <div>
    <div className="Grafico">
    </div>
    <div class="circle" id="circles-1"></div>
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-5 w-full px-20 py-5'>
        
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
            <Progress progress={p1} subtitle={'Nivel Co2'} />
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Nivel de Co2</h1>
                <h1 className=' text-gray-600 font-bold text-rm text-center'>Co2 del ambiente</h1>
            </div>
        </div>


        
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
            <Progress progress={p2} subtitle={'Temperatura Ambiente'} />
            </div>
            
            <div className='grid items-center justify-center text-center'>
                <h1 className=' text-black font-bold text-3xl center'>Temperatura Ambiente</h1>
                <h1 className=' text-gray-600 font-bold text-rm'>Temperatura del ambiente</h1>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <Progress progress={p3} subtitle={'Nivel de Humedad'} />
            </div>
            <div className='grid items-center justify-center text-center'>
                <h1 className=' text-black font-bold text-3xl'>Humedad</h1>
                <h1 className=' text-gray-600 font-bold text-rm'>Humedad del ambiente</h1>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                
                <Progress progress={p4} subtitle={'Temperatura del Agua'} />
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Temperatura</h1>
                <h1 className=' text-gray-600 font-bold text-rm'>Temperatura del agua</h1>
            </div>
        </div>
    </div>
    <div className=" grid grid-cols-1 rounded-xl shadow-lg">
    </div>
    </div>
    <div className=" grid grid-cols-1 rounded-xl shadow-lg">
        <div className='bg-white pt-5 rounded-lg mx-20 grid grid-cols-2 items-center justify-center'>
            <h1 className="text-4xl font-bold text-[#406343] text-center flex items-center justify-center pl-5 pb-5 col-span-2"> Resumen Diario</h1>
            <LineChart width={600}height={500}data={data}margin={{top: 5,right: 30,left: 20,bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ppm" stroke="#8884d8" activeDot={{ r: 8 }}/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            <LineChart width={600}height={500}data={data}margin={{top: 5,right: 30,left: 20,bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ppm" stroke="#8884d8" activeDot={{ r: 8 }}/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </div>
    </div>
    </>
  )
}

export default Camas
