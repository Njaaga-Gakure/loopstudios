import logo from "../assets/logo.svg";
import menu from "../assets/icon-hamburger.svg";
import { useAppContext } from "../context/AppProvider";
import { navLinks } from "../utils";

const Navbar = () => {
  const { openSidebar, scroll } = useAppContext();
  return (
    <nav className={scroll ? "nav nav--sticky" : "nav"}>
      <div className="nav--center content--center">
        <img src={logo} alt="loopstudios" className="nav__logo" />
        <ul className="nav__links">
          {navLinks.map(({ id, link }) => {
            return (
              <li key={id} className="nav__link">
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>
        <button onClick={openSidebar} className="menu__btn">
          <img src={menu} alt="menu icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
