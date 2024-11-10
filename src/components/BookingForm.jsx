import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { MapPin, Clock, Loader } from "lucide-react";
import { useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const EmptyMessage = () => {
  return <div className="text-xs opacity-0">{"empty"}</div>;
};
const ErrorMessage = ({ message, dataTestId }) => {
  return (
    <div data-testid={dataTestId} className="text-red-500 text-xs">
      {message}
    </div>
  );
};
const ReservationSchema = Yup.object().shape({
  date: Yup.date().required("Required"),
  adult: Yup.number().required("Required"),
  child: Yup.number().optional(),
  time: Yup.string().required("Required").oneOf(["11:00", "12:00", "13:00"]),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  cellPhone: Yup.string().required("Required"),
  remarks: Yup.string().optional(),
});

function Reservations() {
  const { isLoading, response, submit, rightData } = useSubmit();
  const { onOpen } = useAlertContext();
  const modal = useRef(null);

  useEffect(() => {
    if (!response) return;
    onOpen(response.type, response.message);

    if (response.type === "success") {
      modal.current.showModal();
    }
  }, [response]);

  const handleSubmit = (values) => {
    submit("form", values);
  };
  return (
    <>
      {response && response.type === "success" && rightData && (
        <dialog
          ref={modal}
          id="modal"
          className="rounded-lg p-8 drop-shadow bg-white flex flex-col items-center"
        >
          <h1 className="text-3xl mb-4">Successfully</h1>
          <div className="flex gap-2 justify-between w-full">
            <p>{rightData.date}</p>
            <p>{rightData.time}</p>
          </div>
          <p>{`Adult ${rightData.adult}, Child ${rightData.child}`}</p>
          <Link to="/" className="w-full mt-4">
            <button
              className="w-full m-auto flex justify-center mt-4 bg-lemon text-primary px-4 py-2 rounded hover:bg-lemon/75 transition-colors"
              onClick={() => {
                modal.current.close();
              }}
            >
              Back to Home
            </button>
          </Link>
        </dialog>
      )}
      <section
        className={cn("flex flex-col gap-2 col-span-1", "sm:col-span-3")}
      >
        <p className="flex gap-2">
          <MapPin className="inline" />
          <span className="inline">983 Xxx Ave, Axx</span>
        </p>
        <p className="flex gap-2">
          <Clock className="inline" />
          <span className="inline">11:00 - 14:00 / 17:30 - 21:00</span>
        </p>
      </section>

      <Formik
        initialValues={{
          date: "",
          adult: 1,
          child: 0,
          time: "122lk",
          firstName: "",
          lastName: "",
          cellPhone: "",
          remark: "",
        }}
        validationSchema={ReservationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-4">
            <section className="flex flex-col bg-white py-2 px-4 rounded-lg">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="date" className="text-primary">
                  Date
                </label>
                <Field
                  id="date"
                  name="date"
                  type="date"
                  className="border p-2 rounded-lg"
                />
                {errors.date && touched.date ? (
                  <ErrorMessage message={errors.date} />
                ) : (
                  <EmptyMessage />
                )}
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="adult" className="text-primary">
                    Adult
                  </label>
                  <Field
                    id="adult"
                    name="adult"
                    type="number"
                    min="1"
                    max="6"
                    className="border p-2 rounded-lg"
                  />
                  {errors.adult && touched.adult ? (
                    <ErrorMessage message={errors.adult} />
                  ) : (
                    <EmptyMessage />
                  )}
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="child" className="text-primary">
                    Child
                  </label>
                  <Field
                    id="child"
                    name="child"
                    type="number"
                    className="border p-2 rounded-lg"
                  />
                  {errors.child && touched.child ? (
                    <ErrorMessage message={errors.child} />
                  ) : (
                    <EmptyMessage />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="time" className="text-primary">
                  Time
                </label>
                <Field
                  id="time"
                  name="time"
                  className="border p-2 rounded-lg"
                  as="select"
                >
                  <option value="">Select Time</option>
                  <option value="10:00" disabled>
                    10:00
                  </option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                </Field>
                {errors.time && touched.time ? (
                  <ErrorMessage message={errors.time} />
                ) : (
                  <EmptyMessage />
                )}
              </div>
            </section>

            <section className="flex flex-col bg-white py-2 px-4 rounded-lg">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="firstName" className="text-primary">
                  First Name
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  className="border p-2 rounded-lg"
                />
                {errors.firstName && touched.firstName ? (
                  <ErrorMessage
                    dataTestId="error-firstname"
                    message={errors.firstName}
                  />
                ) : (
                  <EmptyMessage />
                )}
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="lastName" className="text-primary">
                  Last Name
                </label>
                <Field
                  id="lastName"
                  name="lastName"
                  className="border p-2 rounded-lg"
                />
                {errors.lastName && touched.lastName ? (
                  <ErrorMessage message={errors.lastName} />
                ) : (
                  <EmptyMessage />
                )}
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="cellPhone" className="text-primary">
                  Cell Phone
                </label>
                <Field
                  id="cellPhone"
                  name="cellPhone"
                  className="border p-2 rounded-lg"
                />
                {errors.cellPhone && touched.cellPhone ? (
                  <ErrorMessage message={errors.cellPhone} />
                ) : (
                  <EmptyMessage />
                )}
              </div>
            </section>
            <section className="flex flex-col bg-white pt-2 pb-6 px-4 rounded-lg">
              <label htmlFor="remark" className="text-primary">
                Remark
              </label>
              <Field
                id="remark"
                name="remark"
                className="border p-2"
                as="textarea"
              />
            </section>
            <div className="flex gap-2">
              <Link to="/" className="w-full">
                <button className="w-full m-auto flex justify-center mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-500/50 transition-colors">
                  Cancel
                </button>
              </Link>
              <button
                data-testid="submit"
                type="submit"
                className="w-full m-auto flex justify-center mt-4 bg-lemon text-primary px-4 py-2 rounded hover:bg-lemon/75 transition-colors"
              >
                {isLoading ? (
                  <Loader size={24} className="animate-spin" />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Reservations;
