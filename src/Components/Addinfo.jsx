import React from 'react'

const Addinfo = () => {
  return (
    <div className='rounded-lg'>
    <div className='w-full h-[20%] bg-linear-to-r/srgb from-indigo-500 via-violet-500 to-purple-500 rounded-t-lg'>
        <p className='text-white font-semibold text-xl text-center'>Additional Information</p>
    </div>
    <form className='h-[80%] bg-[#EDF6FE] rounded-b-lg'>
        <div className='p-2'>
        <label className='text-black font-semibold space-x-1' htmlFor='code'>Promotional Code</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='code' type='numbers' placeholder='SUMMER20 (Discount Applied)' />
        <br/>
        <label className='text-black font-semibold space-x-1' htmlFor='date'>Delivery Date</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='date' type='date' />
        <br/>
        <label className='text-black font-semibold space-x-1' htmlFor='date'>Installation Date</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='date' type='date' />
        <br/>
        <p className='text-sm text-black font-semibold space-x-1 space-y-2'>Accessories Included</p>
        <div className="">
                <label className="flex items-center text-black  space-x-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                   Remote Control
                </label>
        </div>
        <div className="">
                <label className="flex items-center text-black  space-x-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                   Installation kit
                </label>
                </div>
                <p className='text-sm text-black font-semibold space-x-1 space-y-2'>Service Agreement</p>
            <div class=" space-x-4 ">
            <div className=''>
                <input  name="period" type="radio" value="1year" required
                       className="h-4 w-4 text-indigo-400 rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200"/>
                <label for="period" className="text-black font-semibold space-x-1">1 year Maintainence Plan</label>
                </div>
                <div className=''>
                <input  name="period" type="radio" value="1year" required
                       className="h-4 w-4 text-indigo-400 rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200"/>
                <label for="period" className="text-black font-semibold space-x-1">2 year Maintainence Plan</label>
                </div>
            </div>
            <div class="">
                <label for="feedback" className="block text-sm font-medium text-black">Your Feedback</label>
                <textarea  rows="4" className=" block w-full bg-white border border-indigo-200 rounded-md shadow-sm 
                focus:border-blue-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Please enter your feedback here..."></textarea>
            </div>
            <label className='text-black font-semibold space-x-1' htmlFor='flname'>Costumer E-Signature</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='flname' type='text' placeholder='Fullname' required/>
        <br/>
        <button type="submit" className="mt-4 w-full bg-indigo-300 text-white py-2 rounded hover:bg-indigo-600">Submit</button>
       
        </div>
    </form>

    </div>
  )
}

export default Addinfo