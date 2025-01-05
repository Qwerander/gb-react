import { createStore } from "redux";
import { themeReducer } from "./themeSlice";

const store = createStore(themeReducer);

export default store;
