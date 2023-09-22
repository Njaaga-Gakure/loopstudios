import { CLOSE_SIDEBAR, OPEN_SIDEBAR, SET_SCROLL } from "../actions";

const reducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) return { ...state, isSidebarOpen: true };
  if (action.type === CLOSE_SIDEBAR) return { ...state, isSidebarOpen: false };
  if (action.type === SET_SCROLL) return { ...state, scroll: action.payload };
  throw new Error(`no action type matching: ${action.type}`);
};

export default reducer;
