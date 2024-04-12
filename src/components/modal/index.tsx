import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";

export default function ModalAutomate(){
    const [open, setOpen] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    
  
    const handleClose = () => {
      setOpen(false);
    };

    return (<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
    >
        <Box sx={{ ...style, width: 600 }}>
        <h2 id="child-modal-title">Text in a child modal</h2>
        <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
    </Modal>)
}