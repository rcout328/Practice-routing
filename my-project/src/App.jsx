import { Link } from "react-router-dom"
const App = () => {
  return (
    <div>
      APP HE
      <Link to={"/"}>Home</Link>
      <Link to={"/cart"}>Cart</Link>
      <Link to={"/contact"}>Conatct</Link>
    </div>
  )
}

export default App
