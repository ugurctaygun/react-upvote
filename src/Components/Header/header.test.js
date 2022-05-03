import { render } from "@testing-library/react";
import Header from "./Header";

describe("Logo renders", () => {
  it("rendered logo", () => {
    const header = render(<Header />);
    const logo = header.container.querySelector("#logo");
    expect(logo).toBeTruthy();
  });
});
