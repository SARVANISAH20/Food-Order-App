import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({children, open, onClose, className = ''}){
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;
        if(open){
            modal.showModal();
        }
        return () => modal.close(); //cleanup function to be used here which will be executed whenever this effet function will run again
    }, [open])

    return(
        createPortal(<dialog ref={dialog} className= {`modal ${className}`} onClose={onClose} >{children}</dialog>, document.getElementById('modal'))
    )
}