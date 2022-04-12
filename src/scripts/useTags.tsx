import {useState} from "react"
import {generateId} from "./generateId"

const initialTags = [
  {tagId: generateId(), tagName: '餐饮'},
  {tagId: generateId(), tagName: '购物'},
  {tagId: generateId(), tagName: '交通'},
  {tagId: generateId(), tagName: '娱乐'},
  {tagId: generateId(), tagName: '工资'}
]

const useTags = () => {
  const [tags, setTags] = useState<{tagId: number, tagName: string}[]>(initialTags)

  const addTag = () => {
    let newTag = window.prompt('请输入新的标签名');
    if (newTag === null || newTag === '') {
      window.alert('新标签名不能为空');
    } else if (tags.some(item => item.tagName === newTag)) {
      window.alert('当前标签已存在');
    } else {
      let tagsClone = tags
      tagsClone.push({tagId: generateId(), tagName: newTag});
      setTags([...tagsClone]);
    }
  }

  return {tags, setTags, addTag}
}

export {useTags}
