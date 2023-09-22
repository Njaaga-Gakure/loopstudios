import { useReducer, useEffect, createContext, useContext } from "react";
import reducer from "./reducer";
import { CLOSE_SIDEBAR, OPEN_SIDEBAR, SET_SCROLL } from "../actions";

const AppContext = createContext();
const initialState = {
  isSidebarOpen: false,
  scroll: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };
  const handleScroll = () => {
    dispatch({ type: SET_SCROLL, payload: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
