import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Input({ placeholder, type, value, onChange }) {
  return (
    <div className={cx("wrapper")}>
      <input type={type} value={value} placeholder={placeholder} />
    </div>
  );
}

export default Input;
