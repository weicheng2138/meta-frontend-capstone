import { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { Loader } from "lucide-react";
import logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

const EmptyMessage = () => {
  return <div className="text-xs opacity-0">{"empty"}</div>;
};
const ErrorMessage = ({ message }) => {
  return <div className="text-red-500 text-xs">{message}</div>;
};
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

function Login() {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!response) return;
    onOpen(response.type, response.message);
    if (response.type === "success") {
      navigate("/");
    }
  }, [response]);

  function handleSubmit(values) {
    submit("", values);
  }
  return (
    <div className="h-svh flex flex-col justify-center items-center">
      <img src={logo} alt="Logo" className="mb-6" />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col">
            <label htmlFor="email" className="text-primary">
              Email
            </label>
            <Field name="email" type="email" className="border p-2" />
            {errors.email && touched.email ? (
              <ErrorMessage message={errors.email} />
            ) : (
              <EmptyMessage />
            )}
            <label htmlFor="password" className="text-primary">
              Password
            </label>
            <Field name="password" className="border p-2" type="password" />
            {errors.password && touched.password ? (
              <ErrorMessage message={errors.password} />
            ) : (
              <EmptyMessage />
            )}
            <button
              type="submit"
              className="w-full m-auto flex justify-center mt-4 bg-lemon text-primary px-4 py-2 rounded hover:bg-lemon/75 transition-colors"
            >
              {isLoading ? (
                <Loader size={24} className="animate-spin" />
              ) : (
                "Login"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
