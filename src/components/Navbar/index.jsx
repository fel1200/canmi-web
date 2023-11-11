import { NavLink } from "react-router-dom";
import iconLogo from "../../assets/icon.svg";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="bg-zinc-100 flex justify-between items-center fixed z-10 top-1 w-full h-20  py-4 px-4 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li>
          <figure className="w-12 h-12 m-4">
            <img src={iconLogo} alt="IBERO" />
          </figure>
        </li>
        <li className="font-semibold text-lg p-1">
          <NavLink to="/">CANMI</NavLink>
        </li>
        <li className="p-1">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Capturas
          </NavLink>
        </li>
        <li className="p-1">
          <NavLink
            to="/indicadores"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Indicadores
          </NavLink>
        </li>
        <li className="p-1">
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contacto
          </NavLink>
        </li>
        <li className="p-1">
          <NavLink
            to="/informacion"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Información
          </NavLink>
        </li>
        <li className="p-1">
          <NavLink
            to="/ayuda"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Ayuda
          </NavLink>
        </li>
        <li className="p-1">
          <NavLink
            to="/graficas"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Gráficas
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">IBERO</li>
        <li className="p-1">
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Iniciar sesión
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
