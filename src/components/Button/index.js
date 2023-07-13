import styles from "./Button.module.scss";
import classNames from "classnames/bind";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  text = false,
  rounded = false,
  primary = false,
  outline = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProp
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProp,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    rounded,
    text,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
