import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Footer from "../../Navigation/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("can't be empty"),
  password: Yup.string().required("can't be empty"),
});
const NgoLoginForm = () => {
  const navigate=useNavigate()
  return(
    <div className="flex flex-col h-screen w-screen bg-white fixed">
    <div className="flex-grow flex items-center justify-center mb-10">
      <div
        className="min-h-full min-w-full  p-8 rounded-lg shadow-lg max-w-screen-md mx-auto flex flex-grow gap-32 items-center
    justify-center"
      >
        <div
          className="mx-10 w-2/5 h-full  rounded-full "
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/thumbnails/027/012/938/small_2x/hungry-starving-poor-little-child-looking-at-the-camera-photo.jpg')",
            backgroundPosition: "-76px",
            backgroundSize: "150%",
            width: "460px",
            height: "450px",
          }}
        ></div>
        <div className=" w-2/5 bg-white border-1 shadow-sm rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Welcome to <br />
            <span className="text-orange-400">NGOs Login Section</span>
          </h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginFormSchema}
            onSubmit={(values) => {
              console.log(values);
             try {
              axios.post('http://localhost:3000/login',values).then(res=>{
                console.log(res);
                localStorage.setItem('token',res.data.token)
                navigate('/Dashboard')
              }).catch(error=>{
                console.log(error);
              })
             } catch (error) {
              console.log(error);
             }
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-5">
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    className="w-full p-2 border rounded"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-500">{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className="w-full p-2 border rounded"
                  />
                  {errors.password && touched.password ? (
                    <div className="text-red-500">{errors.password}</div>
                  ) : null}
                </div>
                <div class=" flex items-center">
                  <div class=" w-full border-t border-gray-300"></div>
                  <div class="px-4 text-gray-500">or</div>
                  <div class="w-full border-t border-gray-300"></div>
                </div>

                <div className="grid space-y-2 gap-3 text-center space-x-2 mt-4">
                  <button
                    type="button"
                    className="mx-2 min-w-full p-2 bg-white border-2 shadow-md text-black rounded"
                    style={{
                      backgroundImage: `url("https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png")`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPositionX: "10vw",
                    }}
                  >
                    Login with Google
                  </button>
                  <button
                    type="button"
                    className="w-full p-2 bg-white border-2 shadow-md text-black rounded "
                    style={{
                      backgroundImage: `url("https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png")`,
                      backgroundSize: "10%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "9vw",
                    }}
                  >
                    Login with Facebook
                  </button>
                  <div className="flex justify-between items-center">
                    <label className="flex items-center">
                      <Field type="checkbox" name="remember" />
                      <span className="ml-2">Remember me</span>
                    </label>
                    <a href="#" className="text-blue-600">
                      Forgot Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full p-2 bg-orange-500 text-white rounded"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center">
                  <p>
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-600">
                      Register
                    </a>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </div>
  )
}
export default NgoLoginForm;
