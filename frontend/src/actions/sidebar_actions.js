export const SHOW = "SHOW";
export const HIDE = "HIDE";

export const handleClose = () => dispatch => (
  dispatch({ type: HIDE })
)

export const handleOpen = (component) => dispatch => (
  dispatch({ type: SHOW, component })
)