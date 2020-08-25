import Layout from "../components/Layout";
import React from "react";
import {useTags} from "scripts/useTags";
import styled from "styled-components";
import Icon from "components/Icon";
import {Link} from "react-router-dom";
import {Button} from "../components/Button";

function Labels() {
  const {tags, addTag} = useTags();
  return (
      <Layout title={'标签'}>
        <TagList>
          {tags.map((tag) =>
              <li key={tag}>
                <Link to={`/tag/${tag}`}>
                  <span className="oneLine">{tag}</span>
                  <Icon name="right"></Icon>
                </Link>
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
