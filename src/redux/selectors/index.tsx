import { createSelector } from "reselect";

export const getAllBooks = createSelector(
  [(state) => state.bookReducer.booksData],
  (booksData) => booksData,
);

export const getFetchingStatus = createSelector(
  [(state) => state.bookReducer.loadingBooks],
  (booksData) => booksData,
);
