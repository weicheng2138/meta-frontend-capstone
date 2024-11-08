import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});
function Login() {
  return (
    <div className="h-svh flex flex-col justify-center items-center">
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className="border" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label htmlFor="password">Password</label>
            <Field name="password" className="border" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
