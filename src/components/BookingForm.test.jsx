import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

import BookingForm from "./BookingForm";
import { MemoryRouter } from "react-router-dom";
import AlertProvider from "../context/AlertProvider";

function setup() {
  const utils = render(
    <MemoryRouter>
      <AlertProvider>
        <BookingForm />
      </AlertProvider>
    </MemoryRouter>,
  );
  const firstName = utils.getByLabelText(/First Name/i);
  const lastName = utils.getByLabelText(/Last Name/i);
  const cellPhone = utils.getByLabelText(/Cell Phone/i);
  const submit = utils.getByTestId("submit");
  return {
    firstName,
    lastName,
    cellPhone,
    submit,
    ...utils,
  };
}

describe("BookingForm", () => {
  it("renders the BookingForm component", () => {
    setup();
    expect(screen.getByText("First Name")).toBeInTheDocument();
  });

  it("leave first name empty string and validate with error message", async () => {
    const { firstName, submit } = setup();
    const errorMessage = screen.queryByTestId("error-firstname");

    expect(errorMessage).not.toBeInTheDocument();
    expect(firstName.value).toBe("");
    fireEvent.click(submit);
    await waitFor(
      () => {
        const errorMessage = screen.queryByTestId("error-firstname");
        expect(errorMessage).toBeInTheDocument();
      },
      { timeout: 1100 },
    );
  });

  it("enter firstname error will not show", async () => {
    const { firstName } = setup();
    const user = userEvent.setup();

    await user.type(firstName, "John");
    const errorMessage = screen.queryByTestId("error-firstname");
    expect(firstName.value).toBe("John");
    expect(errorMessage).not.toBeInTheDocument();
  });
});
