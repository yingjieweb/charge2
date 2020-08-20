import Layout from "../components/Layout";
import React from "react";
import {useTags} from "scripts/useTags";
import styled from "styled-components";
import Icon from "components/Icon";
import {Link} from "react-router-dom";

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
    > svg {
      width: 18px;
      height: 18px;
      fill: #666;
      margin-right: 16px;
    }
  }
`;
const Button = styled.button`
  font-size: 16px;
  color: white;
  background: #767676;
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
`;
const Center = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
`;

function Labels() {
  const {tags, setTags} = useTags();
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
          <Button>新建标签</Button>
        </Center>
      </Layout>
  )
}

export default Labels;
