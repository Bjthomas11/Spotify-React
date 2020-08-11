import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import "./header.scss";
import { useStateProviderValue } from "../../../stateProvider";

const Header = ({ spotifyInstance }) => {
  const [{ user }, dispatch] = useStateProviderValue();
  return (
    <header className="header-container">
      <div className="header-left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs or Albums" />
      </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </header>
  );
};

export default Header;
