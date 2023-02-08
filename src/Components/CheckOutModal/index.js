import { Box, Button, Fade, Modal } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Cart/Cart.slice";

const style = (theme) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
    border: '2px solid currentColor',
    borderRadius: '20px',
    boxShadow: 24,
    padding: '16px 32px 24px 32px',
    textAlign:'center'
  });

const CheckOutModal = ({open, handleClose}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open} timeout={300}>
          <Box sx={style}>
            <h2>Congratulations</h2>
            <p
              id="transition-modal-description"
              style={{ marginTop: "16px", textAlign:'center' }}
            >
              Your Order Was Confirmed
            </p>
            <Button onClick={() => {
                navigate('/')
                dispatch(clearCart())
            }}>Back to Magazine</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CheckOutModal;
