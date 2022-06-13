import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

const SearchBar: FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChange = (event: any) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="search-bar">
      <div className="search">
        <input
          type="text"
          name="search"
          value={searchText}
          onChange={handleChange}
        />
      </div>
      {searchText.length > 0 ? (
        <NavLink
          style={{ textDecoration: "none" }}
          to={`/search/${searchText}`}
        >
          <div className="button">{"->"}</div>
        </NavLink>
      ) : (
        <div className="button">{"->"}</div>
      )}
    </div>
  );
};

export default SearchBar;
