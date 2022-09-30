import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import userServices from "services/httpService/userAuth/userServices";

import userServices from "services/httpService/userAuth/userServices";
import ErrorService from "services/formatError/ErrorService";
import * as Yup from "yup";
import { useMutation, useQuery } from "react-query";
import { useEffect } from "react";

function Signin() {
  let navigate = useNavigate();

  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    ///console.log(res.data)
    return res.data;
  };

  const { isLoading, error, data } = useQuery("sadasdsad", () => fetchUsers(), {
    refetchOnWindowFocus: false,
    onError: (error) => {
      console.log("sadasdas");

      ///console.log(ErrorService.uniformError(error))
    },
    onSuccess: (data) => {
      console.log("data");
      //// console.log(data.data);
    },
  });

  // const { data, status ,isLoading} = useQuery("users", fetchUsers(),

  //     {
  //     refetchOnWindowFocus: false,
  //     onError: (error) => {
  //       console.log("sadasdas")

  //      ///console.log(ErrorService.uniformError(error))
  //     },
  //     onSuccess: (data) => {
  //       console.log("data")
  //      //// console.log(data.data);

  //     },
  //   }
  // );

  async function callme() {
    // let res=await userServices.commonGetService(`/places/getAllNewss`)
    // console.log(res)
    fetchUsers();
  }
  // useEffect(()=>{
  //   callme()

  // },[])

  const formik = useFormik({
    initialValues: {
      pass: "",
      cpass: "",
      username: "",
      email: "",
      gender: "",
      files: [],
      number: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(3, "Must be more than 4 characters")
        .required("Required"),
      pass: Yup.string()
        .min(8, "Must be more than 8 characters")
        .required("This field is required")

        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      cpass: Yup.string().when("pass", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("pass")],
          "Both passwords should be same"
        ),
      }),

      email: Yup.string()
        .required("Required")
        .matches(
          /^.((?=.*[@]){1})((?=.*[a-z]){1}).*$/,
          "Must Contain @ symbol"
        ),

      number: Yup.number().required("Wrong Number").min(11),

      files: Yup.array()
        .required("Required")
        .min(2, "Please select more then 2")
        .max(5, "Please Select less then 5"),

      // male: Yup.string()
      // .required('Required'),
      // female: Yup.string()
      // .required('Required')
    }),
    onSubmit: async (values) => {
      console.log(values);
      //  values.newValue="asdasdasdas"

      console.log(values);
    },
  });

  const onFilechange = (e) => {
    formik.setFieldValue("files", Array.from(e.target.files));
  };

  function anyfun(file) {
    //// .setFieldValue("file", file)  /// firmik set value karnay k liya mnanually
  }

  return (
    <div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={formik.handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      UserName
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="input-styl"
                      placeholder="Email/UserName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.username}
                      </div>
                    ) : null}
                  </div>

                  {/* Password */}

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      name="pass"
                      id="pass"
                      type="password"
                      className="input-styl"
                      placeholder="Password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.pass}
                    />
                    {formik.touched.pass && formik.errors.pass ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.pass}
                      </div>
                    ) : null}
                  </div>

                  {/* Confirm Password */}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Confirm Password
                    </label>
                    <input
                      name="cpass"
                      id="cpass"
                      type="password"
                      className="input-styl"
                      placeholder="Confirm Password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cpass}
                    />
                    {formik.touched.cpass && formik.errors.cpass ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.cpass}
                      </div>
                    ) : null}
                  </div>

                  {/* My New Field */}

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      E.Mail
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="input-styl"
                      placeholder="E.mail"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>

                  {/* phone Number */}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone Number
                    </label>
                    <input
                      name="number"
                      id="number"
                      type="number"
                      className="input-styl"
                      placeholder="Number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.number}
                    />
                    {formik.touched.number && formik.errors.number ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.number}
                      </div>
                    ) : null}
                  </div>

                  {/* Gender*/}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-gender"
                    >
                      Gender
                    </label>
                    <input
                      id="gender"
                      name="gender"
                      type="radio"
                      className="mx-2"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // value={formik.values.gender}
                      value="male"
                    />
                    <label htmlFor="gender">Male</label>
                    {formik.touched.gender && formik.errors.gender ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.gender}
                      </div>
                    ) : null}

                    <input
                      id="gender"
                      name="gender"
                      type="radio"
                      className="mx-2"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // value={formik.values.gender}
                      value="female"
                    />
                    <label htmlFor="gender">Female</label>
                    {formik.touched.gender && formik.errors.gender ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.gender}
                      </div>
                    ) : null}
                    {/* <p>Please select your favorite Web language:</p>
  &nbsp; <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
  &nbsp; <label htmlFor="html">HTML</label><br />
  &nbsp; <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
  &nbsp; <label htmlFor="css">CSS</label><br />
  &nbsp; <input type="radio" id="javascript" name="fav_language" defaultValue="JavaScript" />
  &nbsp; <label htmlFor="javascript">JavaScript</label> */}
                  </div>

                  {/* Select Department */}

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-select"
                    >
                      Choose Skill
                    </label>
                    <select
                      name="select"
                      id="select"
                      className="bg-border"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.select}
                    >
                      <option value="" selected disabled>
                        Choose Your Skill
                      </option>
                      <option value="Figma Design">Figma Design</option>
                      <option value="Web Designing">Web Designing </option>
                      <option value="Mobile application">
                        Mobile application
                      </option>
                    </select>

                    {formik.touched.select && formik.errors.select ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.select}
                      </div>
                    ) : null}
                  </div>

                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-select"
                  >
                    Upload Picture:
                  </label>
                  <input
                    type="file"
                    multiple
                    onChange={onFilechange}
                    id="files"
                    name="files"
                    accept="image/png, image/jpeg"
                  ></input>

                  {formik.touched.files && formik.errors.files ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.files}
                    </div>
                  ) : null}

                  <div className="text-center mt-6">
                    <button className="btn-styl" type="submit">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-black"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/signup" className="text-black">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
