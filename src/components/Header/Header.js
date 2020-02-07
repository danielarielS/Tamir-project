import * as React from "react"

import * as S from "./styles"

const Header = () => {
  const [isClicked, setIsClicked] = React.useState(false)

  const toggleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <S.HeaderWrapper isClicked={isClicked}>
      <S.Daniel onClick={toggleClick}>daniel</S.Daniel>
      {isClicked ? (
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      ) : null}
    </S.HeaderWrapper>
  )
}

export default Header
