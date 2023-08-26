import { ReactNode } from "react";
import classes from "./Modal.module.css";

type Props = {
  onClose: () => void;
  children: ReactNode;
};

export default function Modal(props: Props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose} />
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}
