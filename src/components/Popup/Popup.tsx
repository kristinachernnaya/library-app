import React from "react";
import "./Popup.scss";
import Close from "../../assets/img/closeIcon.png";
import { Book } from "../../types/BookResponse";

interface Props {
  setOpenedBook: (book: Book | undefined) => void;
  openedBook: Book;
}

export default function PopupBody(props: Props): React.ReactElement {
  const { openedBook } = props;
  return (
    <>
      <img
        className="closeBtn"
        src={Close}
        onClick={() => props.setOpenedBook(undefined)}
        alt=""
      />
      <div className="openedBook-content">
        <img src={openedBook.image ?? ""} alt="" />
        <div className="book-description">
          <span className="title">{openedBook.title}</span>
          <div className="book-authors">
            <p>Authors: </p>
            {openedBook.authors &&
              openedBook.authors.map((i, index) => {
                if (
                  openedBook.authors &&
                  index !== openedBook.authors.length - 1
                )
                  return <span>{i}, </span>;
                else return <span>{i}</span>;
              })}
          </div>
          <div className="book-genres">
            <p>Genres: </p>
            {openedBook.genre &&
              openedBook.genre.map((i, index) => {
                if (openedBook.genre && index !== openedBook.genre.length - 1)
                  return <span>{i}, </span>;
                else return <span>{i}</span>;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
