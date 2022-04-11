import React from "react";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import Layout from "../../components/Layout";
import Icon from "../../components/Icon";
import {Button} from "../../components/Button";
import {useTags} from "../../scripts/useTags";

function Labels() {
  const {tags, addTag} = useTags()

  return (
      <Layout title={'标签'}>
        <TagList>
          {tags.map((tag) =>
              <li key={tag.tagId}>
                <NavLink to={`/tag/${tag.tagId}`}>
                  <span className="oneLine">{tag.tagName}</span>
                  <Icon name="right"/>
                </NavLink>
              </li>
          )}
        </TagList>
        <Center>
          <Button onClick={() => {addTag()}}>新建标签</Button>
        </Center>
      </Layout>
  )
}

export default Labels;

const TagList = styled.ol`
  font-size: 16px; 
  padding-left: 16px;
  > li{
    min-height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    > a{
      width: 100%;
      padding: 12px 16px 12px 0;
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
    > .icon {
      width: 18px;
      height: 18px;
      fill: #666;
      margin-right: 16px;
    }
  }
`;
const Center = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
`;
