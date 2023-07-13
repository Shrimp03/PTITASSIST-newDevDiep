import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItem = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      interactive
      delay={[0, 200]}
      offset={[12, 8]}
      hideOnClick={false}
      //visible
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menuList")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
