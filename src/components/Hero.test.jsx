import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero";
import { MemoryRouter } from "react-router-dom";

describe("Hero", () => {
  it("renders the Hero component", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );

    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  });
});
