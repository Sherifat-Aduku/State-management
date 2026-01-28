import { NavLink } from "react-router-dom"
import routes from "../utils/routes"

const Navigation = ()=> {
    return (
<nav>
    <NavLink to = {routes.Home}>Home</NavLink>
    <NavLink to = {routes.About}>About</NavLink>
    <NavLink to = {routes.Contact}>Contact</NavLink>
</nav>
    )
}

export default Navigation