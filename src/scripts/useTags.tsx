import {useState} from "react"

const useTags = () => {
  const [tags, setTags] = useState<{tagId: number, tagName: string}[]>([
    {tagId: 1, tagName: '餐饮'},
    {tagId: 2, tagName: '购物'},
    {tagId: 3, tagName: '交通'},
    {tagId: 4, tagName: '娱乐'},
    {tagId: 5, tagName: '工资'}
  ])

  const addTag = () => {
    let newTag = window.prompt('请输入新的标签名');
    if (newTag === null || newTag === '') {
      window.alert('新标签名不能为空');
    } else if (tags.some(item => item.tagName === newTag)) {
      window.alert('当前标签已存在');
    } else {
      let tagsClone = tags
      tagsClone.push({tagId: Math.random(), tagName: newTag});
      setTags([...tagsClone]);
    }
  }

  return {tags, setTags, addTag}
}

export {useTags}
