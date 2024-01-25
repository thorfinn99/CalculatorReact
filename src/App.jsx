import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [enter, setEnter]  = useState('')
  const [output, setOutput]  = useState('0')

  const input = (e) => {
    setEnter(enter.concat(e.target.name))
  }
  const clear = () => {
    setEnter('')
  }
  const del = (f) => {
    setEnter(enter.toString().slice(0,-1))
  }
  const calc = (f) => {
    setOutput(eval(enter))
  }

  useEffect(() => {
    setOutput(eval(enter))
  })


  return (
    <>
      <div className='max-w-[450px] bg-blue-700 rounded-lg mx-auto'>
        <input type="text" className='bg-transparent w-[420px] pt-4 outline-0   px-3 text-6xl ml-5 text-white  ' placeholder='' value={enter}  name="" id="" />
        <input type="text" className='bg-transparent w-[420px] pt-3 pb-5 outline-0   px-3 text-6xl ml-5 text-white ' value={output}  name="" id="" />
        <div className='' >
          <div className='text-white text-3xl flex mb-4 flex-row justify-center gap-6'>
            <button className='bg-blue-500 px-[23px] rounded-lg' onClick={clear}  >AC</button>
            <button className='bg-blue-500 px-[23px] rounded-lg' onClick={del}  >DL</button>
            <button className='bg-blue-500 px-[36px] rounded-lg' onClick={input} name='.' >.</button>
            <button className='bg-blue-500 px-[36px] p-4 rounded-lg' onClick={input} name='/' >/</button>
          </div>
          <div className='text-white text-3xl mb-4 flex flex-row justify-center gap-6'>
            <button className='bg-blue-500 px-[33px] rounded-lg' onClick={input} name='7' >7</button>
            <button className='bg-blue-500 px-[32px] rounded-lg' onClick={input} name='8' >8</button>
            <button className='bg-blue-500 px-[32px] rounded-lg' onClick={input} name='9' >9</button>
            <button className='bg-blue-500 px-[36px] p-4 rounded-lg' onClick={input} name='*' >*</button>
          </div>
          <div className='text-white text-3xl mb-4 flex flex-row justify-center gap-6'>
            <button className='bg-blue-500 px-[33px] rounded-lg' onClick={input} name='4' >4</button>
            <button className='bg-blue-500 px-[32px] rounded-lg' onClick={input} name='5' >5</button>
            <button className='bg-blue-500 px-[32px] rounded-lg' onClick={input} name='6' >6</button>
            <button className='bg-blue-500 px-[36px] p-4 rounded-lg' onClick={input} name='-' >-</button>
          </div>
          <div className='text-white text-3xl mb-4 flex flex-row justify-center gap-6'>
            <button className='bg-blue-500 px-[33px] rounded-lg' onClick={input} name='1' >1</button>
            <button className='bg-blue-500 px-[32px] rounded-lg' onClick={input} name='2' >2</button>
            <button className='bg-blue-500 px-[32px] rounded-lg' onClick={input} name='3' >3</button>
            <button className='bg-blue-500 px-[36px] p-4 rounded-lg' onClick={input} name='+' >+</button>
          </div>
          <div className='text-white text-3xl mb-5 flex flex-row justify-center gap-6'>
            <button className='bg-blue-500 px-[24px] rounded-lg' onClick={input} name='00' >00</button>
            <button className='bg-blue-500 px-[32px] rounded-lg' onClick={input} name='0' >0</button>
            <button className='bg-blue-500 px-[88px]  p-4 rounded-lg' onClick={calc} >=</button>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
