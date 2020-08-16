import styled from 'styled-components';
import React, {useState} from "react";

const TagsSection:React.FC = () => {
  const [tags, setTags] = useState<string[]>(['餐饮', '购物', '交通', '娱乐', '工资'])
  const [selectedTag, setSelectedTag] = useState<string>('餐饮')
  const onAddTag = () => {
    const newTagName = window.prompt('请输入新的标签名');
    if (newTagName !== null && newTagName !== ''){
      setTags([...tags, newTagName]);
    }
  }
  const onclickTag = (tag:string) => {
    if (tag !== selectedTag){
      setSelectedTag(tag);
    }
  }
  return (
      <Wrapper>
        <ol>
          {tags.map(tag => <li key={tag} onClick={() => {onclickTag(tag)}} className={selectedTag === tag ? 'selected' : ''}>{tag}</li>)}
        </ol>
        <button onClick={onAddTag}>添加标签</button>
      </Wrapper>
  )
}
export {TagsSection};

const Wrapper = styled.section`
  font-size: 14px;
  background: #FFFFFF;
  padding: 12px 10px 16px 20px;
  height: calc(100vh - 499px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > ol {
    > li{
      display:inline-block;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      background: #d9d9d9;
      padding: 0 15px;
      margin-right: 10px;
      margin-top: 6px;
      &.selected {
        background: #00BCD4;
        color: white;
      }
    }
  }
  > button{
    background:none;
    border: none;
    padding: 10px 0 2px 0;
    border-bottom: 1px solid #999;
    margin-top: 8px;
    color: #999;
  }
`;
