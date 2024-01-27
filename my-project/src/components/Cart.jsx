import { Link, useParams } from "react-router-dom"
useParams
const Cart = () => {
  const {_id} = useParams()
  alert(_id)
  return (
    <div>
    Cart hai ye
    <div className="flex items-center gap-5">
    <div className="pl-10">
        <button className="py-4 px-4 rounded-3xl bg-cyan-500">
        <Link to="/">Home</Link>    
        
        </button>
    </div>  
    <div className="pl-10">
        <button className="py-4 px-4 rounded-3xl bg-cyan-500">
        <Link to ="/cart">Cart</Link>    
        
        </button>
    </div>  
    <div className="pl-10">
        <button className="py-4 px-4 rounded-3xl bg-cyan-500">
        <Link to="/contact">Contact</Link>    
     
        </button>
    </div>  
      
    </div>
    </div>
      
  )
}

export default Cart
