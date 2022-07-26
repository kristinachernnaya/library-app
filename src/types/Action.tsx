import { Book } from "./BookResponse";

enum Constants {
  FETCH_BOOKS_PAGE_STARTED = "FETCH_BOOKS_PAGE_STARTED",
  FETCH_BOOKS_PAGE_END = "FETCH_BOOKS_PAGE_END",
  FETCH_BOOKS_PAGE_STATUS_END = "FETCH_BOOKS_PAGE_STATUS_END",
}

export interface Action {
  type: Constants;
  data: Book[];
}
