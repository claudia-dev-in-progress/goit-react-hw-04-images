import PropTypes from "prop-types";
import style from "./style.module.css";

export const ImageGaleryItem = ({ imageUrl, onImageClick, largeImageUrl }) => {
  return (
    <li className={style.galleryitem}>
      <img
        src={imageUrl}
        alt="Not loaded"
        onClick={() => onImageClick(largeImageUrl)}
      ></img>
    </li>
  );
};

ImageGaleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};
