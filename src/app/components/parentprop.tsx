import Childprop from "./childprop"

function Parentprop() {

       const name = "kabir"
       const Qualification = "graduate"
       const address = "Street3487"
       const favorite = "Black"
  return (
    <div>
        <h2 className="h-screen" >
              <Childprop  
              Name = {name}
              Qualification = {Qualification}
              Address ={address}
              Favoritecolor = {favorite}
              />
            </h2>   
    </div>
  )
}

export default Parentprop
