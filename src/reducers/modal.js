const modalReducerDefaultState = {
  modalType: null,
  modalProps: {}
}

export default (state = modalReducerDefaultState, action) => {
  switch (action.type) {
      case 'OPEN_MODAL':
          return {
              modalType: action.modalType,
              modalProps: action.modalProps
          }
      case 'CLOSE_MODAL':
          return modalReducerDefaultState
      case 'TOGGLE_MODAL':
          return !state
          
      default: return state;
  }
}