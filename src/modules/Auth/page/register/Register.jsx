import classNames from "classnames/bind";
import { useFormik } from "formik";
import * as Yup from "yup";
// import "yup-phone-lite";
import { useDispatch } from "react-redux";
import { signUpRegister } from "~/redux/slice/auth/AuthSlice";
import { MENU_REGISTER } from "../../component/constant";
import FormRegister from "../../component/FormRegister/FormRegister";
import styles from "./Register.module.scss";

const cx = classNames.bind(styles);

const Register = () => {
  const dispatch = useDispatch();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const password = `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,20}$`;
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      address: "",
      password_confirm: "",
    },
    onSubmit: async (values, actions) => {
    //   console.log(values);
      dispatch(signUpRegister(values));
    //   actions.resetForm();
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, "Qua Ngan!")
        .max(50, "Qua dai roi b oi!")
        .required("Vui lòng điền vào trường này"),
      email: Yup.string()
        .email("Vui lòng nhập định dạng email hợp lệ")
        .required("Vui lòng điền vào trường này"),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Vui lòng điền vào trường này"),
      password: Yup.string()
        .matches(password, "Password is not valid")
        .required("Vui lòng điền vào trường này"),
      address: Yup.string()
        .min(2, "Qua Ngan!")
        .max(50, "Qua dai roi b oi!")
        .required("Vui lòng điền vào trường này"),
      password_confirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Mật khẩu bạn nhập không khớp")
        .required("Vui lòng điền vào trường này"),
    }),
  });

  return (
    <div className={cx("container")}>
      {/* <Header search={search} onChange={(e) => setSearch(e.target.value)} /> */}
      <form className={cx("form-Register")} onSubmit={formik.handleSubmit}>
        <h3 className={cx("form-heading")}>ĐĂNG KÝ THÀNH VIÊN MỚI </h3>
        {MENU_REGISTER.map((input) => (
          <FormRegister
            key={input.id}
            {...input}
            onChange={formik.handleChange}
            value={formik.values[input.name]}
            errors={formik.errors[input.name]}
            touched={formik.touched[input.name]}
          />
        ))}
        <div className={cx("form-group")}>
          <button type="submit" className={cx("form-submit")}>
            Đăng ký
          </button>
        </div>
        <div className={cx("form-signin")}>
          <span>Bạn đã có tài khoản !</span>
          {/* <NavLink
            to="/sign-in"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Đăng nhập
          </NavLink> */}
        </div>
      </form>
    </div>
  );
};
export default Register;
