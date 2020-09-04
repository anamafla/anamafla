import React from "react"
import { render } from "@testing-library/react"
import Intro from "../intro"

test("intro renders correctly", () => {
  const { getByText } = render(<Intro />)

  const element = getByText("Front End Developer")

  expect(element).toBeInTheDocument()
})
