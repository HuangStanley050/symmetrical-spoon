import { render, screen } from "@testing-library/react";
import Greeting from "./components/Greeting";

test("renders learn react link", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ...in this case nothing
  //

  // Assert
  //
  const element = screen.getByText("Hello World");
  expect(element).toBeInTheDocument();
});
