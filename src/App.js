import React from "react";
import "./App.css";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
};

const App = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="container">
      <form className="container p-3 form" onSubmit={handleSubmit}>
        <h4 className="text-center text-light">Sign Up Page with Fromik</h4>
        <br />

        {/* first and last name  */}
        <div>
          <label className="text-light">First Name:</label>
          <label className="text-light" id="lname">
            Last Name:
          </label>
          <br />
          <input
            type={"text"}
            name="fname"
            id="fname"
            autoComplete="off"
            className="form-control "
            placeholder="First Name"
            value={values.fname}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <input
            type={"text"}
            name="lname"
            id="lname"
            autoComplete="off"
            className="form-control "
            placeholder="Last Name"
            value={values.lname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <br />
          <br />
          {errors.fname && touched.fname ? (
            <span className="text-danger">{errors.fname}</span>
          ) : null}
          {errors.lname && touched.lname ? (
            <span className="text-danger">{errors.lname}</span>
          ) : null}
        </div>

        {/* email  */}

        <label className="text-light">Email:</label>
        <input
          type={"email"}
          name="email"
          id="email"
          autoComplete="off"
          className="form-control "
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <span className="text-danger">{errors.email}</span>
        ) : null}
        <br />

        {/* password  */}
        <label className="text-light">Password:</label>
        <input
          type={"password"}
          name="password"
          placeholder="Password"
          id="password"
          autoComplete="off"
          className="form-control"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <span className="text-danger"> {errors.password}</span>
        ) : null}
        <br />
        <br />
        <button type="submit" className="btn btn-success w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default App;
