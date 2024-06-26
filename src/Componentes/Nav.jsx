import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navBar">
            <NavLink className={({isActive}) => isActive ? "activo" : null} to={"/"}>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "activo" : null} to={"/reyes/atanagildo"}>Atanagildo</NavLink>
            <NavLink className={({isActive}) => isActive ? "activo" : null} to={"/reyes/ervigio"}>Ervigio</NavLink>
            <NavLink className={({isActive}) => isActive ? "activo" : null} to={"/reyes/leogivildo"}>Leogivildo</NavLink>
            <NavLink className={({isActive}) => isActive ? "activo" : null} to={"/reyes/recesvinto"}>Recesvinto</NavLink>
            <NavLink className={({isActive}) => isActive ? "activo" : null} to={"/reyes/sisebuto"}>Sisebuto</NavLink>
        </nav>
    );
}
 
export default Nav;