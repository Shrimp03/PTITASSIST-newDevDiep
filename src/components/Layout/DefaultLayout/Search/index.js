import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { wrapper as PopperWrapper } from "~/components/Popper";
import ItemResult from "~/components/itemSearchResult";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1]);
      //lúc nào cần hiện các kết quả tìm kiếm thì thêm ở đây
    }, 0);
  });

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchString = e.target.value;
    if (!searchString.startsWith(" ")) {
      setSearchValue(searchString);
    }
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Document</h4>
            <ItemResult />
            <ItemResult />
            <ItemResult />
            <ItemResult />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("searchbar")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Tìm kiếm..."
          spellCheck={false}
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        <HeadlessTippy content="Tìm kiếm">
          <button
            className={cx("searchbutton")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </HeadlessTippy>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
