import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../src/styles/theme"
import GlobalStyle from "../src/styles/GlobalStyles"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "../src/app/store"

export const decorators = [
  Story => (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  ),
]
