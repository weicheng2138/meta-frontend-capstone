import { cn } from "../lib/utils";
import BookingForm from "../components/BookingForm";
import { Link } from "react-router-dom";
import { MapPin, Clock, Loader } from "lucide-react";
import { useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Reservations() {
  return (
    <div className="bg-hightlight-light flex justify-center">
      <div className={cn("w-full py-6 px-4 max-w-[640px] flex flex-col gap-6")}>
        <h1 className="text-lemon text-3xl font-black">Little Lemon</h1>
        <BookingForm />
      </div>
    </div>
  );
}

export default Reservations;
