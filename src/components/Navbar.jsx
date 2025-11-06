import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-inner">
        <h1 className="logo">Dummy Data Dashboard</h1>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/entities">Entities</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
