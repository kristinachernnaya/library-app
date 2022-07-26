import React from "react";
import "./SearchBar.scss";

interface Props {
  setMode: () => void;
  searchItems: (query: string) => void;
}

function SearchBar(props: Props): React.ReactElement {
  return (
    <div className="header-wrapper">
      <span>Book Library</span>
      <div className="right-header">
        <div className="theme-switcher">
          <div className="theme-switcher__toggle">
            <input
              type="checkbox"
              className="theme-switcher__input"
              id="darkSwitch"
              onClick={() => props.setMode()}
            />
          </div>
        </div>
        <input
          type="text"
          id="header-search"
          placeholder="Search books ..."
          name="s"
          onChange={(e) => props.searchItems(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
