import styles from "./Label.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Label({ lv1, lv2, lv3, lv4, children }) {
  const classes = cx({ lv1, lv2, lv3, lv4 });
  return (
    <p className={classes}>
      <span className={cx("title")}>{children}</span>
    </p>
  );
}

export default Label;
