import React from "react";
import "./Book.scss";
import { Book as BookType } from "../../types/BookResponse";

interface Props {
  bookData: BookType;
  view: "grid" | "list";
}

function Book(props: Props): React.ReactElement {
  const { bookData, view } = props;
  if (view === "grid") {
    return (
      <div className="book-card--grid">
        <img src={bookData.image ?? ""} alt="" />
        <span>{bookData.title}</span>
      </div>
    );
  } else {
    return (
      <div className="book-card--list">
        <span className="title">{bookData.title}</span>
        <div className="authors">
          {" ( "}
          {bookData.authors &&
            bookData.authors.map((i, index) => {
              if (bookData.authors && index !== bookData.authors.length - 1)
                return <span>{i}, </span>;
              else return <span>{i}</span>;
            })}
          {" )"}
        </div>
      </div>
    );
  }
}

export default Book;
