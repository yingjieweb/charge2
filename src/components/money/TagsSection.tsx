import styled from 'styled-components';

const TagsSection = styled.section`
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

export {TagsSection};
