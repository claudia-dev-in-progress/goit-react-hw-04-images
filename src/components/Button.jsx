import PropTypes from "prop-types";
import style from "./style.module.css";

export const Button = ({ onClick }) => {
  return (
    <button type="button" className={style.load_more} onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
