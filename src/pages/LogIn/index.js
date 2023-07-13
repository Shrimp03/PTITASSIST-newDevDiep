/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Label from "~/components/Label";

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx("container")}>
      <div className={cx("form-container_sign-up-container")}>
        {/* <!-- Sign Up form code goes here --> */}
        <Label lv1>ĐĂNG KÍ</Label>

        <div className={cx("social-container")}>
          <img className={cx("fblogo")} />
          <img className={cx("gglogo")} />
        </div>

        <span style={{ fontFamily: "Roboto Slab Regular", fontSize: 20 }}>
          hoặc tạo một tài khoản cá nhân
        </span>

        <div className={cx("Input_field")}>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>

        <Button rounded to="/">
          ĐĂNG KÍ
        </Button>
      </div>

      <div className={cx("overlay-left")}>
        <Label lv2>PTIT ASSIST</Label>
        <div className={cx("welcome")}>
          <Label lv3>Welcome Back!</Label>
          <p style={{ fontFamily: "Roboto Slab Regular", fontSize: 20 }}>
            Tiếp tục với tài khoản của bạn
          </p>
          <Button rounded to="/Signup">
            ĐĂNG NHẬP
          </Button>
          <img className={cx("ptitlogo")} />
        </div>
      </div>
    </div>
  );
}

export default Login;
