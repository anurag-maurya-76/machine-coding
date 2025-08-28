import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Test the functionality of Counter Component", () => {
  it("should display the initial value passed", () => {
    render(<Counter initialCount={0} />);
    const count = Number(screen.getByTestId("count").textContent);
    expect(count).toEqual(0);
  });

  it("should increase the value on clicking Increment", () => {
    render(<Counter initialCount={0} />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(incrementButton);
    const count = Number(screen.getByTestId("count").textContent);
    expect(count).toEqual(1);
  });
});
