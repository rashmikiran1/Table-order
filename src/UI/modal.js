import { Fragment } from "react";
import  ReactDOM from "react-dom";
import classes from './modal.module.css';
const Overlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Backdrop = (props) => {
    return (
      <div className={classes.backdrop} onClick={props.onClose}></div>
    )
}
const element = document.getElementById('overlay');

const Modal = (props)=> {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, element)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, element)}
        </Fragment>
    ) 
}
export default Modal