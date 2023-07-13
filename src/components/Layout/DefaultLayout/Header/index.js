/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
/* eslint-disable jsx-a11y/alt-text */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEarthAsia,
  faEllipsisH,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import routesConfig from "~/config/routes";
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import Menu from "~/components/Popper/Menu";
import "tippy.js/dist/tippy.css";
import Search from "../Search";

const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "Tiếng Việt",
  },
  {
    icon: <FontAwesomeIcon icon={faMessage} />,
    title: "Phản hồi",
    //to: "/feedback",
    to: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D",
  },
];

function Header() {
  const currentuser = true; //true - false thay đổi header đăng nhập đăng xuất

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "Thông tin cá nhân",
      to: "/user",
    },
    ...MENU_ITEM,
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      title: "Đăng xuất",
      separate: true,
    },
  ];

  const location = useLocation();

  return (
    <header className={cx("wrapper")}>
      <HeadlessTippy content="PTITASSIST">
        <Link to={routesConfig.home}>
          <div className={cx("logo")}></div>
        </Link>
      </HeadlessTippy>
      <div className={cx("Welcome")}>
        <p className={cx("welcome")}>{gettitle(location.pathname)}</p>
      </div>

      <Search />
      <div className={cx("action")}>
        {currentuser ? (
          <>
            <Tippy content="Thông báo" className={cx("tippy-box")}>
              <Link to="/notification">
                <button className={cx("Noti")}>
                  <FontAwesomeIcon icon={faBell} />
                </button>
              </Link>
            </Tippy>
          </>
        ) : (
          <>
            <Button primary to="/Login">
              Log In
            </Button>
          </>
        )}
        <Menu items={currentuser ? userMenu : MENU_ITEM}>
          {currentuser ? (
            <img className={cx("user-avatar")} />
          ) : (
            <button className={cx("menubtn")}>
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
          )}
        </Menu>
      </div>
    </header>
  );
}

function gettitle(pathname) {
  switch (pathname) {
    case "/":
      return "Welcome to PTIT ASSIST";
    case "/About":
      return "PTIT ASSIST";
    case "/Document":
      return "Tài Liệu";
    case "/Forum":
      return "Diễn Đàn";
    case "/notification":
      return "Thông Báo";
    case "/YourQuestion":
      return "Hỏi Đáp";
    case "/Support":
      return "Hỗ Trợ";
  }
}

export default Header;
