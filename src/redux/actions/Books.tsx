import {
  FETCH_BOOKS_PAGE_STARTED,
  FETCH_BOOKS_PAGE_END,
  FETCH_BOOKS_PAGE_STATUS_END,
} from "../constants/Books";
import { getAllBooks } from "../../api";
import { Book, Response } from "../../types/BookResponse";
import { Dispatch } from "redux";

function parse(c: Response) {
  let result: Book[] = [];
  if (c.books)
    c.books.map((item) => {
      result.push({
        title: item.title,
        authors: item.authors,
        image: item.thumbnailURL ?? "",
        genre: item.categories,
      });
      return true;
    });
  return result;
}

/* Fetch all books on page*/
export const fetchBooksStarted = () => ({
  type: FETCH_BOOKS_PAGE_STARTED,
});

export const fetchBooksEnd = (data: Book[]) => ({
  type: FETCH_BOOKS_PAGE_END,
  data,
});

export const fetchBooksStatusEnd = (data: Book[]) => ({
  type: FETCH_BOOKS_PAGE_STATUS_END,
  data,
});

export const fetchBooks = () => async (dispatch: Dispatch) => {
  dispatch(fetchBooksStarted());

  const books = await getAllBooks();

  if (books) {
    const booksData = parse(books);
    dispatch(fetchBooksEnd(booksData));
    dispatch(fetchBooksStatusEnd(booksData));
  }
};
