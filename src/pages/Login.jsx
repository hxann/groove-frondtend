import React from 'react'
import User from '../component/User'

export default function Login() {
  return (
    <div className='flex items-center justify-center h-screen relative bg-gradient-to-r from-cyan-500 to-pink-500'>
    <div className='flex flex-col justify-center items-center w-[400px] h-[550px] bg-white rounded-[20px] relative'>
        <img srcSet='/logo.png 3x' alt='melody-groove' class="mt-[-350px]" />
        <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text'>Melody Groove</h1>
    </div>
    <User></User>
</div>


  )
}
