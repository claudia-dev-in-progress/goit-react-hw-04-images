import { useEffect } from "react";
import PropTypes from "prop-types";
import style from "./Modal.module.css";

export const Modal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
  }, [onClose]);

  return (
    <img src={imageUrl} className={style.modal} alt="not loaded modal"></img>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
