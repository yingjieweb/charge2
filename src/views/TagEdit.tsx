import React, {ChangeEventHandler} from "react";
import {useTags} from "../scripts/useTags";
import {useParams} from "react-router-dom"
import Layout from "../components/Layout";
import { Button } from "components/Button";
import {Input} from "../components/Input";
import styled from "styled-components";

type Params = {
  routerTag: string;
}

const TagEdit:React.FC = (props) => {
  const {findTag, saveTag, deleteTag} = useTags();
  let {routerTag} = useParams<Params>();
  const matchedTag = findTag(routerTag);
  let newTag = routerTag;
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // updateTag(matchedTagId, event.target.value);
    newTag = event.target.value;
  };
  return (
      <Layout title='编辑标签' leftIconName='left'>
        <Wrapper>
          <Input label="标签名" type="text" placeholder="请输入新的标签名" defaultValue={routerTag} onChange={onChange}></Input>
        </Wrapper>
        <ButtonsWrapper>
          <Button onClick={() => {saveTag(matchedTag, newTag)}}>保存</Button>
          {/*<Button onClick={() => {deleteTag(matchedTag)}}>删除</Button>*/}
        </ButtonsWrapper>
      </Layout>
  )
}
export {TagEdit};

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;

const ButtonsWrapper = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
