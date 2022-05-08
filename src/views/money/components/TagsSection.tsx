import React from "react";
import styled from 'styled-components';
import {useTags} from '../../../scripts/useTags'
import {generateId} from "../../../scripts/generateId";

type Props = {
  value: number;
  onChange: (tag: number) => void;
}

const TagsSection:React.FC<Props> = (props) => {
  const selectedTagId = props.value;
  const {tags, setTags} = useTags();

  const onclickTag = (tagId:number) => {
    if (tagId !== selectedTagId){
      props.onChange(tagId);
    }
  }
  const onAddTag = () => {
    const newTagName = window.prompt('请输入新的标签名');
    if (newTagName !== null && newTagName !== ''){
      setTags([...tags, {tagId: generateId(), tagName: newTagName}]);
    }else if (newTagName !== ''){
      window.alert('标签名不能为空');
    }
  }

  return (
      <Wrapper>
        <ol>
          {tags.map(tag =>
              <li key={tag.tagId}
                  onClick={() => {onclickTag(tag.tagId)}}
                  className={selectedTagId === tag.tagId ? 'selected' : ''}>
                {tag.tagName}
              </li>)
          }
        </ol>
        <button onClick={onAddTag}>添加标签</button>
      </Wrapper>
  )
}
export {TagsSection};

const Wrapper = styled.section`
  height: calc(100vh - 491px);
  padding: 12px 10px 16px 20px;
  background: #FFFFFF;
  overflow: auto;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > ol {
    max-width: 100%;
    > li{
      display:inline-block;
      height: 24px;
      max-width: 100%;
      padding: 0 15px;
      margin-right: 10px;
      margin-top: 6px;
      border-radius: 12px;
      background: #d9d9d9;
      line-height: 24px;
      white-space: nowrap;  /* 设置文字在一行显示，不能换行 */  
      overflow: hidden;    /* 文字长度超出限定宽度，则隐藏超出的内容 */
      text-overflow: ellipsis;/* 规定当文本溢出时，显示省略符号来代表被修剪的文本 */
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
    outline: none;
  }
`;
