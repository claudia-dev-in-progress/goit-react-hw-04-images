import PropTypes from "prop-types";
import { ImageGaleryItem } from "./ImageGalleryItem";
import style from "./style.module.css";

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={style.gallery}>
      {images.map((image) => (
        <ImageGaleryItem
          imageUrl={image.webformatURL}
          onImageClick={onImageClick}
          largeImageUrl={image.largeImageURL}
        ></ImageGaleryItem>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
