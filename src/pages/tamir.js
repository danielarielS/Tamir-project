import React from "react"
import GlobalStyle from "../components/layout"

import Header from "../components/Header/Header"

export default () => {
  React.useEffect(() => {
    setTimeout(() => {
      window.location = "/"
    }, 5000)
  }, [])

  function goBack() {
    window.history.back()
  }

  return (
    <>
      <GlobalStyle />
      <Header />

      <div>This is tamir's page</div>
      <button onClick={goBack}>BACK</button>
    </>
  )
}
