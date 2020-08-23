import Nav from "./Nav";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

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
  background-color: #00BCD4;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: relative;
  padding: 0 15px;
`

const Layout = (props: any) => {
  return (
      <Wrapper>
        <Main>
          <Title>
            <Icon name={props.leftIconName}></Icon>
            <span>{props.title}</span>
            <Icon name={props.rightIconName}></Icon>
          </Title>
          {props.children}
        </Main>
        <Nav></Nav>
      </Wrapper>
  )
}

export default Layout;
