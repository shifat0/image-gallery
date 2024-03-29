import { Formik } from "formik";
import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authLoading, authLogin } from "../Redux/Actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    errMessage: state.errMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authLogin: (email, password) => dispatch(authLogin(email, password)),
  };
};

const Login = ({ authLogin, errMessage }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      {errMessage ? alert(errMessage) : ""}
      {loading ? (
        <h1 className="text-center mt-44 text-3xl">Loading...</h1>
      ) : (
        <>
          <h1 className="text-4xl text-center mt-28 mb-10">Login</h1>

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) errors.email = "Required";
              else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              )
                errors.email = "Invalid email address";

              if (!values.password) errors.password = "Required";
              else if (values.password.length < 6)
                errors.password = "Password must be at least 6 characters";

              return errors;
            }}
            onSubmit={(values) => {
              authLogin(values.email, values.password);
              setLoading(true);
              authLoading(true);
              setTimeout(() => {
                setLoading(false);
                location.state !== null
                  ? navigate(location.state.from)
                  : navigate("/");
              }, 2000);
            }}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 w-1/2 sm:w-1/3 mx-auto"
              >
                <input
                  className="border-2 border-black p-2"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  value={values.email}
                />
                <span className="text-[#BE3144]">{errors.email}</span>
                <input
                  className="border-2 border-black p-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                />
                <span className="text-[#BE3144]">{errors.password}</span>
                <button
                  className="bg-[#557C55] text-white px-5 py-2 rounded-md"
                  type="submit"
                >
                  Submit
                </button>
                <span className="text-center">
                  Doesn't have an account?
                  <Link to="/signup" className="underline">
                    Signup
                  </Link>
                </span>
              </form>
            )}
          </Formik>
        </>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
