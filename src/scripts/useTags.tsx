import {useState} from "react"

const useTags = () => {
  const [tags, setTags] = useState<string[]>(['餐饮', '购物', '交通', '娱乐', '工资'])

  const addTag = () => {
    let newTag = window.prompt('请输入新的标签名');
    if (newTag === null || newTag === '') {
      window.alert('新标签名不能为空');
    } else if (tags.indexOf(newTag) >= 0) {
      window.alert('当前标签已存在');
    } else {
      let tagsClone = tags
      tagsClone.push(newTag);
      setTags([...tagsClone]);
    }
  }

  return {tags, setTags, addTag}
}

export {useTags}
