import { combineReducers } from "redux";
import { createReducer } from "redux-create-reducer";

const initialState = {
  id: 778
};

const reducerA = createReducer(initialState, {
  GET_USER(state, { payload }) {
    return {
      id: state.id + (payload ? payload.id : 1)
    };
  }
});

export default combineReducers({
  reducerA
});
