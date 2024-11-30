

function Childprop (props : any ) {

  return (
    <>
      <div  className=" w-11/12 sm:w-9/12 md:w-8/12 mx-auto flex flex-col mt-10 md:mt-20   h-screen" >
      <h1 className="text-2xl font-serif font-semibold p-3" >Props-Practics</h1>
         <div className=" w-10/12 md:w-6/12 lg:w-4/12 space-y-5 p-2 py-6 border-[1px] border-gray-300 shadow-md shadow-black" >
            <h1 className="text-xl  text-center font-bold" >Information  </h1>
           <h2 className="font-semibold" >Name :  <span className=" text-gray-800 px-2 " > {props.Name} </span> </h2>
           <h2 className="font-semibold">Qualification : <span className=" text-gray-800 px-2" >  {props.Qualification} </span> </h2>
           <h2 className="font-semibold" >Address : <span className=" text-gray-800 px-2" >  {props.Address} </span> </h2>
           <h2 className="font-semibold">Favorite color : <span className=" text-gray-800 px-2" > {props.Favoritecolor} </span> </h2>
           </div>
        </div>  
    </> 
  )
}

export default Childprop 
