import React from 'react'

const Client = () => {
  return (
    <div className=' rounded-lg  w-[20vw]'>
    <div className=' h-[20%] bg-linear-to-r/srgb from-indigo-500 via-violet-500 to-purple-500 rounded-t-lg'>
        <p className='text-white font-semibold text-xl text-center'>End-User Details</p>
    </div>
    <form className='h-[80%] bg-[#EDF6FE] rounded-b-lg'>
    <div className='p-2  w-full  items-center flex justify-center flex-col'>
        <label className='text-black font-semibold space-x-1' htmlFor='flname'>Name*</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='flname' type='text' placeholder='Fullname' required/>
        <br/>
        <label className='text-black font-semibold space-x-1 ' htmlFor='dropdown'>Country Code*</label>
        <br/>
        <select className=' shadow-md border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200 bg-white rounded-lg p-2' name='dropdown' required>
            <option value="" disabled selected>No Selection</option>
            <option value="+1">United States (+1)</option>
            <option value="+44">United Kingdom (+44)</option>
            <option value="+91">India (+91)</option>
            <option value="+81">Japan (+81)</option>
            <option value="+61">Australia (+61)</option>
            <option value="+49">Germany (+49)</option>
            <option value="+33">France (+33)</option>
            <option value="+39">Italy (+39)</option>
            <option value="+34">Spain (+34)</option>
            <option value="+86">China (+86)</option>
        </select>

        <br/>
        <label className='text-black font-semibold space-x-1' htmlFor='Phone'>Phone*</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='Phone' type='numbers' placeholder='+91' required/>
        <br/>
        <label className='text-black font-semibold space-x-1' htmlFor='email'>Email*</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='email' type='email' placeholder='johndoe@gmail.com' required/>
        
        <br/>
        <label className='text-black font-semibold space-x-1' htmlFor='state'>State*</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='state' type='text' placeholder='state' required/>
        <br/>
        <label className='text-black font-semibold space-x-1' htmlFor='city'>City*</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='city' type='text' placeholder='city' required/>
        <br/>
        <label className='text-black font-semibold space-x-1' htmlFor='postal-code'>Postal Code*</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='postal-code' type='text' placeholder='postal-code' required/>
        <br/>
        <label className='text-black font-semibold space-x-1' htmlFor='street'>Address*</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='street' type='text' placeholder='123 Main St' required/>
        <br/>
        <button type="next" className="mt-4 w-full bg-indigo-300 text-white py-2 rounded hover:bg-indigo-600">Next</button>
    </div>
        
    </form>



    </div>
  )
}

export default Client