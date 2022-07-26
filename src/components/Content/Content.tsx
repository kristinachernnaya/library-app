import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import { Book as BookTypes } from "../../types/BookResponse";
import SearchBar from "../SearchBar/SearchBar";
import GridImage from "../../assets/img/grid-list-view.png";
import "./Content.scss";
import { usePrevious } from "../../hooks.ts/usePrevious";
import createPopup from "../Popup/createPopup";
import PopupBody from "../Popup/Popup";

interface Props {
  booksData: BookTypes[];
  setMode: () => void;
}

function Content(props: Props): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState<BookTypes[] | undefined>(
    undefined,
  );
  const [openedBook, setOpenedBook] = useState<BookTypes | undefined>(
    undefined,
  );
  const [view, setView] = useState<"grid" | "list" | undefined>(undefined);
  const prevSearchQuery = usePrevious(searchQuery);
  const prevView = usePrevious(view);

  useEffect(() => {
    const { booksData } = props;

    if (booksData && filteredBooks === undefined) {
      setFilteredBooks(booksData);
    }

    if (searchQuery !== prevSearchQuery && booksData) {
      const filter = searchQuery.toUpperCase();
      const filteredData = booksData.filter(
        (i) => i.title.toUpperCase().indexOf(filter) > -1,
      );
      setFilteredBooks(filteredData);
    }

    const initialView =
      null !== localStorage.getItem("diplay-mode") &&
      "grid" === localStorage.getItem("diplay-mode");

    if (view === undefined) setView(initialView ? "grid" : "list");

    if (view !== prevView) {
      if (view === "grid") localStorage.setItem("diplay-mode", "grid");
      if (view === "list") localStorage.setItem("diplay-mode", "list");
    }
  }, [searchQuery, props, prevSearchQuery, filteredBooks, view, prevView]);
  return (
    <>
      <SearchBar searchItems={setSearchQuery} setMode={props.setMode} />
      <div className="list-content" id="project-wrapper">
        <div className="grid-list-wrapper">
          <img
            src={GridImage}
            alt=""
            onClick={() => {
              setView(view === "grid" ? "list" : "grid");
            }}
          />
        </div>
        <div
          id="book-list"
          className={view === "grid" ? "grid-view" : "list-view"}
        >
          {filteredBooks && filteredBooks.length > 0 ? (
            filteredBooks.map((item, i) => {
              return (
                <div
                  id={"book" + i}
                  key={i}
                  onClick={() => setOpenedBook(item)}
                  className="book-item"
                >
                  {view && (
                    <Book key={i + "-book"} bookData={item} view={view} />
                  )}
                </div>
              );
            })
          ) : (
            <div className="empty-list">No Books!</div>
          )}
        </div>
      </div>
      {openedBook ? (
        createPopup({
          comp: (
            <PopupBody openedBook={openedBook} setOpenedBook={setOpenedBook} />
          ),
        })
      ) : (
        <></>
      )}
    </>
  );
}

export default Content;
