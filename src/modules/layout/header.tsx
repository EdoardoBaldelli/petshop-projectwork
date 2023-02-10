import { Link } from "react-router-dom"

export const Header= () =>{
    
    return(
        <div className="header">
        <Link to="/">Homepage</Link>
        <Link to="/animals">Animals</Link>
        <Link to="/animals/new">Add New Animal</Link>
        </div>
    )
}