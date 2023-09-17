import { useState } from "react";
import style from "./SearchBar.module.css";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

export const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (evt) => {
    const { value } = evt.target;
    setSearchQuery(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    onSubmit(searchQuery);
    setSearchQuery("");
    form.reset();
  };

  return (
    <div>
      <form className={style.search_form} onSubmit={handleFormSubmit}>
        <button type="submit" className={style.SearchForm__button}>
          <Icon
            icon="icomoon-free:search"
            color="gray"
            width="20"
            height="16"
          />
        </button>
        <input
          type="text"
          value={searchQuery}
          placeholder="Search images..."
          className={style.SearchForm__input}
          onChange={handleChange}
          autoComplete="off"
          name="searchQuery"
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
