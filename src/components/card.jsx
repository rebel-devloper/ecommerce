import { useContext } from "react"
import { Cardcontext } from "./context"

function Card(props){
   const carditme=useContext(Cardcontext)
//    console.log(carditme.item)

    const handlesubmint=()=>{

//fgfdg
    }
    return(
        <div className="card bg-light shadow mx-auto">
            <div><img src={props.url} alt="...img" /></div>
            <div className="card-body">
                <h2>{props.name}</h2>
                <h2> ${props.price}</h2>
                <button onClick={handlesubmint} className="btn  btn-primary"> add to cart</button>
            </div>
        </div>
    )
}
export default Card