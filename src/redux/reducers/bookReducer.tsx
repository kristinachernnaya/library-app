import { Action } from "../../types/Action";
import {
  FETCH_BOOKS_PAGE_STARTED,
  FETCH_BOOKS_PAGE_END,
  FETCH_BOOKS_PAGE_STATUS_END,
} from "../constants/Books";

const bookReducer = (state = { booksData: undefined }, action: Action) => {
  switch (action.type) {
    /* Fetch all books on page*/
    case FETCH_BOOKS_PAGE_STARTED: {
      return { ...state, loadingBooks: true };
    }

    case FETCH_BOOKS_PAGE_END: {
      const books = action.data ? action.data : [];

      return {
        ...state,
        booksData: books,
        loadingBooks: false,
      };
    }

    case FETCH_BOOKS_PAGE_STATUS_END: {
      return {
        ...state,
        loadingBooks: false,
      };
    }
    default:
      return state;
  }
};

export default bookReducer;
