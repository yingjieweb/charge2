import React from "react";
import styled from "styled-components";

import TabBer from "./TabBer";

const Layout = (props: any) => {
  return (
      <Container>
          <Header>{props.title}</Header>
          <Main>{props.children}</Main>
          <TabBer/>
      </Container>
  )
}

export default Layout;

const Container = styled.div`
  height: 100vh;
  background-color:#fff;
  display: flex;
  flex-direction: column;
`
const Header = styled.header`
  height: 38px;
  padding: 0 15px;
  color: white;
  background-color: #00BCD4;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Main = styled.div`
  flex-grow: 1;
  max-height: calc(100vh - 94px);
  overflow-y: auto;
`
