import { useEffect } from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

export const Modal = ({ imageUrl, onClose }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <img src={imageUrl} className={style.modal} alt="not loaded modal"></img>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
