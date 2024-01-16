import Links from "./links/Links";
import "./navbar.css";

// Navbar
const Navbar: React.FC = () => {
  return (
    <div className="container navbar">
      <div className="logo">Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
