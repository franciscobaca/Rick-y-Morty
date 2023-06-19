import React from "react";
import style from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { searchCharacter } from "../../../redux/actions/actions";

export default function SearchBar() {
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    let value = event.target.value;
    setSearch(value);
  };

  const handleSearch = () => {
    dispatch(searchCharacter(search));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search character"
        onChange={handleChange}
      />
      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
}
