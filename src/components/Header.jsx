import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex justify-between">
      <Link to="/" alt="Logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <nav className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/order-online">Order Online</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
