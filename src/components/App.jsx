import { useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getImages } from "../api/api";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState("");

  const handleFormSubmit = async (q) => {
    setPage(1);
    setIsLoading(true);
    const response = await getImages(q, page, perPage);
    setImages(response.hits);
    setQuery(q);
    setIsLoading(false);
  };

  const loadMore = async () => {
    setIsLoading(true);

    const response = await getImages(query, page + 1, perPage);

    setImages((prevImages) => [...prevImages, ...response.hits]);
    setPage((prevPage) => prevPage + 1);

    setIsLoading(false);
  };

  const handleCloseModal = () => {
    setLargeImageUrl("");
  };

  const handleImageClick = (url) => {
    setLargeImageUrl(url);
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit}></SearchBar>
      <ImageGallery
        images={images}
        onImageClick={handleImageClick}
      ></ImageGallery>
      {images.length > 0 && isLoading === false && (
        <Button onClick={loadMore}></Button>
      )}
      {isLoading === true && <Loader></Loader>}
      {largeImageUrl !== "" && (
        <Modal imageUrl={largeImageUrl} onClose={handleCloseModal}></Modal>
      )}
    </>
  );
};
