/* eslint-disable jsx-a11y/alt-text */
import classNames from "classnames/bind";
import styles from "./Signup.module.scss";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Label from "~/components/Label";

const cx = classNames.bind(styles);

function SignUp() {
  return (
    <div className={cx("container")}>
      <div className={cx("form-container_log-in-container")}>
        {/* <!-- Sign Up form code goes here --> */}
        <Label lv1>ĐĂNG NHẬP</Label>

        <div className={cx("social-container")}>
          <img className={cx("fblogo")} />
          <img className={cx("gglogo")} />
        </div>

        <span style={{ fontFamily: "Roboto Slab Regular", fontSize: 20 }}>
          hoặc sử dụng tài khoản của bạn
        </span>

        <div className={cx("Input_field")}>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>

        <Button rounded to="/">
          ĐĂNG NHẬP
        </Button>
      </div>

      <div className={cx("overlay-right")}>
        <Label lv2>PTIT ASSIST</Label>
        <div className={cx("hello")}>
          <Label lv3>HELLO, Friend!</Label>
          <div className={cx("paragraph_signup")}>
            <p style={{ fontFamily: "Roboto Slab Regular", fontSize: 20 }}>
              Bạn là người mới?
            </p>
            <p style={{ fontFamily: "Roboto Slab Regular", fontSize: 20 }}>
              Đăng kí
            </p>
            <p style={{ fontFamily: "Roboto Slab Regular", fontSize: 20 }}>
              và trải nghiệm học tập cùng PTIT ASSIST
            </p>
          </div>
          <Button rounded to="/Login">
            ĐĂNG KÍ
          </Button>
          <img className={cx("ptitlogo")} />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
