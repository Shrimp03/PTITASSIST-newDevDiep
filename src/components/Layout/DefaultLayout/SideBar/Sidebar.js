import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import config from "~/config/index.js";
import Menu, { MenuItems } from "./Menu";
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItems title="Trang Chủ" to={config.routes.home} />
        <MenuItems title="Thông Báo" to={config.routes.notification} />
        <MenuItems title="Tài Liệu" to={config.routes.document} />
        <MenuItems title="Diễn Đàn" to={config.routes.forumPage} />
        <MenuItems title="Câu Hỏi Của Bạn" to={config.routes.yourquestion} />
        <MenuItems title="PTITASSIST" to={config.routes.aboutPage} />
        <MenuItems title="Hỗ Trợ" to={config.routes.supportPage} />
      </Menu>
      <img className={cx("logo")} alt="opps" />
    </aside>
  );
}
export default Sidebar;
