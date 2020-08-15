import Nav from "./Nav";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
`
const Title = styled.div`
  height: 38px;
  background-color: #4FA9F2;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const Layout = (props: any) => {
  return (
      <Wrapper>
        <Main>
          <Title>{props.title}</Title>
          {props.children}
        </Main>
        <Nav></Nav>
      </Wrapper>
  )
}

export default Layout;
