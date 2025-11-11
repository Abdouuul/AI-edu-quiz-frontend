import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const SignupSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});


export default function Signup() {
  return (
    <div className="flex h-screen">
      {/* Left side image */}
      <div className="w-2/3 bg-gray-200">
        <img
          src="https://images.unsplash.com/photo-1600880292089-90e8b27afd30"
          alt="Education background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right side form */}
      <div className="w-1/3 flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-md p-8 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              username: "",
              password: "",
              confirm_password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log("Form Submitted:", values);
              // later: send to backend API
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <Field
                      name="first_name"
                      type="text"
                      className="w-full border rounded-md p-2"
                    />
                    <ErrorMessage
                      name="first_name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <Field
                      name="last_name"
                      type="text"
                      className="w-full border rounded-md p-2"
                    />
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full border rounded-md p-2"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Username</label>
                  <Field
                    name="username"
                    type="text"
                    className="w-full border rounded-md p-2"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="w-full border rounded-md p-2"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Confirm Password</label>
                  <Field
                    name="confirm_password"
                    type="password"
                    className="w-full border rounded-md p-2"
                  />
                  <ErrorMessage
                    name="confirm_password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white mt-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Create Account"}
                </button>

                <p className="text-sm text-center mt-4 text-gray-600">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-600 hover:underline">
                    Log in
                  </a>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
