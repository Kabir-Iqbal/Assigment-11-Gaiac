"use client"

import { useState } from "react"
import Parentprop from "./components/parentprop"
import Grid from "./components/grid"

function Page() {
const [number , setNumber] = useState(0)

const handleincreament =()=>{
  setNumber(number + 0 + 1)
}
const handledecrement = ()=>{
  setNumber(number - 1)
}


  return (
    <>
      <Grid />
    <div className=" h-fit  overflow-hidden">
      <div className=" flex flex-col space-y-5 border-[1px] border-gray-300 shadow-md shadow-gray-500/50 items-center w-10/12 xs:w-9/12 sm:w-8/12 md:w-6/12 mx-auto py-24 mt-36 text-black ">
         <h2 className="text-2xl font-bold mb-4" >UseState</h2>
         <h2 className="text-xl my-1" > {number} </h2>
         <button  className="border-[1px] border-green-400 shadow-sm shadow-black bg-green-300 px-5 py-2 text-md font-semibold "  onClick={handleincreament} >Increment</button>
         <button className="border-[1px] border-red-400 shadow-sm shadow-black bg-red-300 px-5 py-2 text-md font-semibold "  onClick={handledecrement} >Decrement</button>
      </div>

    </div>

   <Parentprop />  

    </>
  )
}

export default Page
