import React from 'react'

export default function User() {
  return (
    <div>
    <form className='absolute left-0px top-0px mt-[-70px] ml-[-330px]'>
    <div className='field flex flex-col space-y-1'>
        <label htmlFor='typeusername' class='label'>UserName</label>
        <input 
            type='text'
            className='input border-b-2 border-gray-300 w-70  focus:outline-none'
            placeholder='Type UserName'
        />
    </div>
    <div className=' mt-5 field flex flex-col space-y-1'>
        <label htmlFor='typpassword' class='label'>Password</label>
        <input 
            type='text'
            className='input border-b-2 border-gray-300 focus:outline-none'
            placeholder='Type Password'
        />
        <a className='flex ml-[160px] font-sans text-sm text-gray-500 mb-5'>Forgot Password?</a>
       
    </div>
    <button className='flex mt-5 ml-[48px] bg-gradient-to-r from-cyan-500 to-pink-500  justify-center px-16 py-2 rounded-[20px] text-white'>Login</button>
</form>

</div>
  )
}
