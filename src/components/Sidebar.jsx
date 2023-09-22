import logo from "../assets/logo.svg";
import close from "../assets/icon-close.svg";
import { useAppContext } from "../context/AppProvider";
import { navLinks } from "../utils";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useAppContext();
  return (
    <aside className={isSidebarOpen ? "sidebar sidebar--open" : "sidebar"}>
      <div className="sidebar__header">
        <img src={logo} alt="loopstudios" className="sidebar__logo" />
        <button onClick={closeSidebar} className="close__btn">
          <img src={close} alt="close icon" />
        </button>
      </div>
      <ul className="sidebar__links">
        {navLinks.map(({ id, link }) => {
          return (
            <li onClick={closeSidebar} key={id} className="sidebar__link">
              <a href="#">{link}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
