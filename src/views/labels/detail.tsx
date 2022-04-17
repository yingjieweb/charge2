import React from "react";
import {useParams, useNavigate} from "react-router-dom"
import {useTags} from "../../scripts/useTags";
import styled from "styled-components";
import Layout from "../../components/Layout";
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";

function Detail() {
  const {findTag, deleteTag, editTag} = useTags()

  const {tagId} = useParams()
  const navigate = useNavigate()

  const currentTag = findTag(parseInt(tagId!))

  const inputRef = React.createRef<HTMLInputElement>()
  const onBlur = () => {
    if (inputRef.current !== null) {
      currentTag.tagName = inputRef.current.value
    }
  }

  const handleSubmit = () => {
    editTag(parseInt(tagId!), currentTag.tagName)
    navigate(-1)
    alert('标签修改成功')
  }
  const handleDelete = () => {
    deleteTag(parseInt(tagId!))
    // navigate(-1)
    window.history.back()
    // alert('标签删除成功')
  }

  return (
      <Layout title={'编辑标签'}>
        <Wrapper>
          <Input label="备注" type="text" placeholder="请输入账单备注" ref={inputRef} defaultValue={currentTag?.tagName || ''} onBlur={onBlur}/>
        </Wrapper>

        <Center>
          <Button onClick={() => {handleSubmit()}}>确定</Button>
          <Button onClick={() => {handleDelete()}}>删除</Button>
        </Center>
      </Layout>
  )
}

export default Detail;

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;
const Center = styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 28px;
`;
