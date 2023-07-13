/* eslint-disable react/style-prop-object */
import Button from "~/components/Button";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data.separate,
  });
  return (
    <div className={classes}>
      <Button leftIcon={data.icon} to={data.to} onClick={onClick}>
        {data.title}
      </Button>
    </div>
  );
}

export default MenuItem;
