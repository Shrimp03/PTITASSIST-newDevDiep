import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "./Header";
import SideBar from "./SideBar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")} id="myHeader">
      <div className={cx("header")}>
        <Header />
      </div>
      <div className={cx("container")}>
        <div className={cx("sidebar")}>
          <SideBar />
        </div>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
