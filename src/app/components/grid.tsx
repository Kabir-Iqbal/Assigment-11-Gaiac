import Image from "next/image"

function Grid() {
  return (
    <div>
        <div className=" flex w-11/12 flex-col md:flex-row lg:w-10/12 gap-5 mx-auto mt-8 " >
        {/* Right-Section */}
            <div className=" w-6/12 md:w-5/12 h-[370px] border-gray-200 border-[1px] shadow-md shadow-gray-500/50" >
               <Image className="w-full h-[65%]"
                 src="/images/lancome.webp" alt="Lancome-perfume" width={150} height={150} />
                 <div className=" text-center my-2" >
                    <p className="text-blue-500 font-serif font-semibold my-2">Lancome</p>
                    <p>350$</p>
                    <button className="bg-blue-400 text-white font-sans font-semibold px-8 py-2 my-4" >Buy Now</button>
                 </div>
            </div>

        {/* LeftSection */}
        <div className="grid grid-cols-2 gap-5  ">
                <div className=" h-[370px] border-gray-200 border-[1px] shadow-md shadow-gray-500/50" >
                    <Image className="w-full h-[60%] px-2 "
                     src="/images/black.webp"   alt="Black-perfume" width={150} height={150} />
               <div className=" text-center my-2" >
                    <p className="text-blue-500 font-serif font-semibold my-4">Black</p>
                    <p>350$</p>
                    <button className="bg-blue-400 text-white font-sans font-semibold px-8 py-2 my-4" >Buy Now</button>
                 </div>
                </div>

                <div className=" h-[370px] border-gray-200 border-[1px] shadow-md shadow-gray-500/50">
                <Image className="w-full h-[60%] px-2 "
                     src="/images/boss.jpg"   alt="Black-perfume" width={150} height={150} />
                <div className=" text-center my-2" >
                    <p className="text-blue-500 font-serif font-semibold my-4">Boss</p>
                    <p>350$</p>
                    <button className="bg-blue-400 text-white font-sans font-semibold px-8 py-2 my-4" >Buy Now</button>
                 </div>
               </div>
          </div>
     </div>
            
    </div>      

  )
}

export default Grid
