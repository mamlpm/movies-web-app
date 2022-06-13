import { FC } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./search-bar";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="home-icon">
        <NavLink style={{ textDecoration: "none" }} to={"/"}>
          <h1>{"Inicio"}</h1>
        </NavLink>
      </div>
      <div className="search">
        <SearchBar />
      </div>
      <div className="my-qualifications">
        <NavLink style={{ textDecoration: "none" }} to={"/mylist"}>
          <h1>{"Mis puntuaciones"}</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
