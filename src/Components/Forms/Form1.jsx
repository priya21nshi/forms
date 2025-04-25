import React, { useState } from "react";

const Form1 = () => {


    const initalValue={
        email:"xyz@gmail.com"||"",

        password:"......"||"",
        country:""



    }

    const[data,setData]=useState(initalValue)

    console.log(data)


    const handlechange=(e)=>{


      const  {name,value}=e.target
      setData((xzy)=>({...xzy,[name]:value}))




    }




  return (
    <div className=" w-[25vw]  h-full  bg-gray-600  p-5  rounded-2xl   border border-gray-500">
      <div className=" w-full flex flex-col items-center   gap-3 justify-center">
        <div className=" h-20 w-20  rounded-full  overflow-hidden">
          <img src="https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>

        <p className=" text-4xl  font-bold  text-white">Pryanshi</p>

        <p className="text-gray-500  text-sm">paryanshi@gmail.com</p>

        <button className=" bg-blue-500 px-2 py-2    font-semibold  text-white  rounded-full">
          Explore
        </button>
      </div>

      <form className="flex flex-col   justify-center  gap-4  mt-3">
        <input

        name="email"

        value={data.email}

        onChange={handlechange}
          placeholder="Email"
          className=" placeholder:text-gray-400   text-gray-400 border border-gray-400  p-2  outline-none  rounded-full"
        />

        <input
         name="Password"

         value={data?.password}

onChange={handlechange}
          placeholder="Password"
          className=" placeholder:text-gray-400  text-gray-400  border border-gray-400  p-2  outline-none  rounded-full"
        />

        <select

name="country"

onChange={handlechange}
          placeholder="Select Country"
          className=" placeholder:text-gray-400   text-gray-400 border border-gray-400  p-2  outline-none  rounded-full"
          required

          value={data.country}
        >
          <option className="  text-gray-300" value="" disabled selected>
            No Selection
          </option>
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
      </form>
    </div>
  );
};

export default Form1;
