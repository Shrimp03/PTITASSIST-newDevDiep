import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);
function MenuItems({ title, to }) {
  return (
    <NavLink
      className={(nav) => cx("menu-item", { active: nav.isActive })}
      to={to}
    >
      <span aria-hidden="true" className={cx("circle")}></span>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}
MenuItems.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
export default MenuItems;
