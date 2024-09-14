const initialState = { recipes: [] };

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RECIPE":
      return { ...state, recipes: action.data };
    default:
      return state;
  }
};
