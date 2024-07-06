// reducer.js
export const initialState = {
    visitedList: [1,2,3,4,5],
    likedList:[1,2,3,4,5],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_VISITED_LIST':
        return {
          ...state,
          visitedList: action.payload,
        };
      default:
        return state;
    }
  };
  