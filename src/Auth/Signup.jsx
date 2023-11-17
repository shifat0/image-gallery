import { Formik } from "formik";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-center mt-28 mb-10">Signup</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) errors.name = "Required";
          if (!values.email) errors.email = "Required";
          else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          )
            errors.email = "Invalid email address";

          if (!values.password) errors.password = "Required";
          else if (values.password.length < 6)
            errors.password = "Password must be at least 6 characters";
          if (values.confirmPassword !== values.password)
            errors.confirmPassword = "Password doesn't match";

          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-1/2 sm:w-1/3 mx-auto"
          >
            <input
              className="border-2 border-black p-2"
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              value={values.name}
            />
            <span className="text-[#BE3144]">{errors.name}</span>
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
            <input
              className="border-2 border-black p-2"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={values.confirmPassword}
            />
            <span className="text-[#BE3144]">{errors.confirmPassword}</span>
            <button
              className="bg-[#557C55] text-white px-5 py-2 rounded-md"
              type="submit"
            >
              Submit
            </button>
            <span className="text-center">
              Already have and account?{" "}
              <Link to="/login" className="underline">
                Login
              </Link>
            </span>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Signup;
