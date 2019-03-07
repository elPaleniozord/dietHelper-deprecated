export const openModal = (modal) => {
  return {
      type: 'OPEN_MODAL',
      modalType: modal.modalType,
      modalProps: modal.modalProps
  }
}
export const closeModal = (modal) => {
  return {
      type: 'CLOSE_MODAL',
      modal
  }
}