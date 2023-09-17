import PropTypes from "prop-types";

export const ImageGaleryItem = ({ imageUrl, onImageClick, largeImageUrl }) => {
  return (
    <li>
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
