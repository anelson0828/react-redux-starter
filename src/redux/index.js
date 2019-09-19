const ADD_POINT = 'ADD_POINT';
const UPDATE_SELECTION_PLAYER1 = 'UPDATE_SELECTION_PLAYER1'
const UPDATE_SELECTION_PLAYER2 = 'UPDATE_SELECTION_PLAYER2'

export const addPoint = player => {
  return { type: ADD_POINT, player };
};

export const updateSelection = (player, selection) => {
  if(player === 1) {
    return {type: UPDATE_SELECTION_PLAYER1, player, selection}
  } else {
    return {type: UPDATE_SELECTION_PLAYER2, player, selection}
  }
}

const initialState = {
  player1: 0,
  player2: 0,
  currentSelection: {
    player1: '',
    player2: ''
  }
}

const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POINT:
      if(action.player === 'player1') {
          return {...state, player1: state.player1 + 1}
      } else {
          return {...state, player2: state.player2 + 1}
      }
    case UPDATE_SELECTION_PLAYER1:
      const updatedSelection1 = {...state.currentSelection, player1: action.selection}
      return {...state, currentSelection: updatedSelection1}
    case UPDATE_SELECTION_PLAYER2:
      const updatedSelection2 = {...state.currentSelection, player2: action.selection}
      return {...state, currentSelection: updatedSelection2}
    default:
      return state;
  }
};

export default appReducer;
