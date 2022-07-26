import React, { useCallback, useEffect, useState } from "react";
import PageSpinner from "../PageSpinner/PageSpinner";
import Content from "../Content/Content";
import "./Main.scss";
import { useSelector } from "react-redux";
import { getAllBooks, getFetchingStatus } from "../../redux/selectors";
import { fetchBooks } from "../../redux/actions/Books";
import { useAppDispatch } from "../../utils/utils";
import { usePrevious } from "../../hooks.ts/usePrevious";

function Main(): React.ReactElement {
  const dispatch = useAppDispatch();
  const fetchData = useCallback(() => dispatch(fetchBooks()), [dispatch]);
  const booksData = useSelector(getAllBooks);
  const loadingBooks = useSelector(getFetchingStatus);

  const [themeMode, setMode] = useState<"light" | "dark" | undefined>(
    undefined,
  );
  const prevThemeMode = usePrevious(themeMode);

  useEffect(() => {
    if (booksData === undefined) fetchData();

    const initialTheme =
      null !== localStorage.getItem("darkSwitch") &&
      "dark" === localStorage.getItem("darkSwitch");
    if (themeMode === undefined) setMode(initialTheme ? "dark" : "light");

    if (themeMode !== prevThemeMode) {
      if (themeMode === "dark") localStorage.setItem("darkSwitch", "dark");
      if (themeMode === "light") localStorage.removeItem("darkSwitch");
    }
  }, [booksData, fetchData, themeMode, prevThemeMode]);

  return (
    <div
      className={
        "main-wrapper " +
        (themeMode === "dark" ? "dark-mode " : "") +
        (loadingBooks ? "loadingBg" : "")
      }
    >
      {!loadingBooks ? (
        <Content
          booksData={booksData}
          setMode={() => setMode(themeMode === "dark" ? "light" : "dark")}
        />
      ) : (
        <PageSpinner />
      )}
    </div>
  );
}

export default Main;
