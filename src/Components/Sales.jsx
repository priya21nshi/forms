import React from 'react'

const Sales = () => {
  return (
    <div className='rounded-lg'>
        <div className='w-full h-[20%] bg-linear-to-r/srgb from-indigo-500 via-violet-500 to-purple-500 rounded-t-lg'>
        <p className='text-white font-semibold text-xl text-center'>Sales Information</p>
    </div>
    <form className='h-[80%] bg-[#EDF6FE] rounded-b-lg'>
        <div className='p-2'>
        <label className='text-black font-semibold space-x-1' htmlFor='flname'> SalesPerson Name*</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='flname' type='text' placeholder='Jane Smith' required/>
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
        <label className='text-black font-semibold space-x-1' htmlFor='street'>Store Location*</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='street' type='text' placeholder='123 Main St' required/>
        <br/>
        <label className='text-black font-semibold space-x-1' htmlFor='Phone'>Store Contact*</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='Phone' type='numbers' placeholder='+91' required/>
        <br/>
        <div className=''>
        <button type="next" className="mt-4 w-full bg-indigo-300 text-white py-2 rounded hover:bg-indigo-600">Next</button>
        </div>
        </div>
    </form>
    </div>
  )
}

export default Sales