import * as actionTypes from "./action";

interface IState {
  todolist: any;
}

const initialState: IState = {
  todolist: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return {
        ...state,
        todolist: [...state.todolist, { value: action.value }],
      };
    case actionTypes.COMPLETE_TASK:
      return {
        ...state,
        todolist: [...state.todolist],
      };
    case actionTypes.RM_TASK:
      return {
        ...state,
        todolist: [...state.todolist].filter(
          (item, index) => item.value !== action.value
        ),
      };
    default:
      return state;
  }
};

export default reducer;
