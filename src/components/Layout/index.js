import React from "react"
import { Global, css } from "@emotion/core"
import { PageLayout } from "./styles"

import { ThemeProvider } from "emotion-theming"

import Header from "../Header"
import darkTheme from "../../themes/dark"
import lightTheme from "../../themes/light"

export default function Layout({ children }) {
  const stringValue =
    typeof window !== "undefined"
      ? localStorage.getItem("isDarkTheme")
      : "false"
  const boolValue = /true/i.test(stringValue)
  const [isDarkTheme, setDarkTheme] = React.useState(boolValue)

  function changeTheme() {
    // true is darkTheme
    // false is light theme
    setDarkTheme(!isDarkTheme)
    localStorage.setItem("isDarkTheme", String(!isDarkTheme))
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <PageLayout>
        <Global
          styles={css`
            body {
              background: ${isDarkTheme
                ? darkTheme.palette.background[0]
                : lightTheme.palette.background[0]};
            }

            * {
              margin: 0;
              padding: 0;
              outline: none;
              transition: background 0.2s;
            }
          `}
        />
        <Header onSwitch={changeTheme} switchChecked={isDarkTheme} />
        {children}
      </PageLayout>
    </ThemeProvider>
  )
}
