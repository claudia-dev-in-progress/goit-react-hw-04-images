import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ImageGallery } from "./ImageGallery";
import { getImages } from "../api/api";
import { Button } from "./Button";
import { Loader } from "./Loader";
import { Modal } from "./Modal";

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
    setPage(page + 1);

    const response = await getImages(query, page, perPage);

    setImages([...images, response.hits]);
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
