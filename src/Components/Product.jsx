import React from 'react'

const Product = () => {
  return (
    <div className='rounded-lg'>
        <div className='w-full h-[20%] bg-linear-to-r/srgb from-indigo-500 via-violet-500 to-purple-500 rounded-t-lg'>
        <p className='text-white font-semibold text-xl text-center'>Product Details</p>
    </div>
    <form className='h-[80%] bg-[#EDF6FE] rounded-b-lg'>
    <div className='p-2'>
    <label className='text-black font-semibold space-x-1' htmlFor='name'>Product Name</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='name' type='text' placeholder='Voltas Smart Split Air Conditioner' required/>
        <br/>
    <label className='text-black font-semibold space-x-1 ' htmlFor='dropdown'>Brand</label>
        <br/>
        <select className=' shadow-md border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200 bg-white rounded-lg p-2' name='dropdown' required>
                    <option value="" disabled selected>No Selection</option>
                    <option value="lloyd">Lloyd</option>
                    <option value="voltas">Voltas</option>
                    <option value="haier">Haier</option>
                    <option value="samsung">Samsung</option>
                    <option value="lg">LG</option>
                    <option value="whirlpool">Whirlpool</option>
                    <option value="daikin">Daikin</option>
                    <option value="blue-star">Blue Star</option>
            </select>
            <br/>
            <p className='text-sm text-black font-semibold space-x-1 space-y-2'>Warranty Period</p>
            <div class="flex items-start space-x-4 ">
            <div className=''>
                <input  name="period" type="radio" value="1year" required
                       className="h-4 w-4 text-indigo-400 rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200"/>
                <label for="period" className="text-black font-semibold space-x-1">1 year</label>
                </div>
                <div className=''>
                <input  name="period" type="radio" value="1year" required
                       className="h-4 w-4 text-indigo-400 rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200"/>
                <label for="period" className="text-black font-semibold space-x-1">2 year</label>
                </div>
            </div>
            <label className='text-black font-semibold space-x-1' htmlFor='Phone'>Model Number</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='Phone' type='numbers' placeholder='AC1234' />
        <br/>
        <label className='text-black font-semibold space-x-1' htmlFor='date'>Purchase Date</label>
        <br/>
        <input className=' rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200' name='date' type='date' />
        <br/>
        <p className='text-sm text-black font-semibold space-x-1 space-y-2'>Star Rating of your Air Conditioner</p>
            <div class=" space-x-2 ">
            <div className=''>
                <input  name="star" type="radio" value="2star" required
                       className="h-4 w-4 text-indigo-400 rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200"/>
                <label for="star" className="text-black font-semibold space-x-1"><span className="text-yellow-500 text-lg">&#9733;&#9733;</span><span class="unfilled text-gray-600 text-lg">&#9734;&#9734;&#9734;</span></label>
                </div>
                
                <div className=''>
                <input  name="star" type="radio" value="3star" required
                       className="h-4 w-4 text-indigo-400 rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200"/>
                <label for="star" className="text-black font-semibold space-x-1"><span className="text-yellow-500 text-lg">&#9733;&#9733;&#9733;</span><span class="unfilled text-gray-600 text-lg">&#9734;&#9734;</span></label>
                </div>
                
                <div className=''>
                <input  name="star" type="radio" value="4star" required
                       className="h-4 w-4 text-indigo-400 rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200"/>
                <label for="star" className="text-black font-semibold space-x-1"><span className="text-yellow-500 text-lg">&#9733;&#9733;&#9733;&#9733;</span><span class="unfilled text-gray-600 text-lg">&#9734;</span></label>
                </div>


                <div className=''>
                <input  name="star" type="radio" value="5star" required
                       className="h-4 w-4 text-indigo-400 rounded-lg p-2 shadow-md placeholder:text-gray-300 bg-white border border-indigo-200 focus:ring focus:ring-indigo-200 focus:border-indigo-200"/>
                <label for="star" className="text-black font-semibold space-x-1"><span className="text-yellow-500 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span></label>
                </div>
            </div>
            <button type="next" className="mt-4 w-full bg-indigo-300 text-white py-2 rounded hover:bg-indigo-600">Next</button>
    </div>
    </form>
    </div>
  )
}

export default Product