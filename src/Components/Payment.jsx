import React from 'react'

const Payment = () => {
  return (
    <div className='rounded-lg'>
    <div className='w-full h-[20%] bg-linear-to-r/srgb from-indigo-500 via-violet-500 to-purple-500 rounded-t-lg'>
        <p className='text-white font-semibold text-xl text-center'>Payment Details</p>
    </div>
        <form className='h-[80%] bg-[#EDF6FE] rounded-b-lg'>
        <div className='p-2'>
        <p className='text-sm text-black font-semibold space-x-1 space-y-2'>Select Payment Method</p>
        <div className="">
                <label className="flex items-center text-black  space-x-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                    Credit Card
                </label>
        </div>
        <div className="">
                <label className="flex items-center text-black  space-x-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                    GPay
                </label>
        </div>
        <div className="">
                <label className="flex items-center text-black  space-x-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                    Bank Transfer
                </label>
        </div>
        <div className="">
                <label className="flex items-center text-black  space-x-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                  Cash on Delivery
                </label>
        </div>
        <label className='text-black font-semibold space-x-1' htmlFor=''>Transaction ID</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='Phone' type='text' placeholder='TXN123456' />
        <br/>
        <label className='text-black font-semibold space-x-1' htmlFor='Amt'>Total Amount(&#8377;)*</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='Amt' type='text' placeholder='&#8377;41,990' required/>
        <br/>
        <label for="pdf-upload" className="block text-black font-semibold space-x-1">Payment Reciept*</label>
                <input type="file"  accept="application/pdf" className="mt-1 block w-full text-sm text-gray-300 
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-100 file:text-indigo-600
                hover:file:bg-indigo-300" required />
                <button type="next" className="mt-4 w-full bg-indigo-300 text-white py-2 rounded hover:bg-indigo-600">Next</button>
       
        </div>


        </form>
    </div>
  )
}

export default Payment