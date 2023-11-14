import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { FC, ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const wrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

test("Home renders", async () => {
  render(<Home />, { wrapper });
  expect(screen.getByText(/front-end challenge!/i)).toBeInTheDocument();
});
