import {useEffect, useRef, useState} from "react"
import {generateId} from "./generateId"

const useTags = () => {
  const [tags, setTags] = useState<{tagId: number, tagName: string}[]>([])

  const freshCount = useRef(0) // 标记生命周期： created or mounted
  useEffect(() => {
    freshCount.current += 1
    setTags(JSON.parse(window.localStorage.getItem('tags') || JSON.stringify([
      {tagId: generateId(), tagName: '餐饮'},
      {tagId: generateId(), tagName: '购物'},
      {tagId: generateId(), tagName: '交通'},
      {tagId: generateId(), tagName: '娱乐'},
      {tagId: generateId(), tagName: '工资'}
    ])))
  }, []) // mounted
  useEffect(() => {
    if (freshCount.current < 1) return // 忽视 tags 初始化那次 -> 类似 Vue 非 deep watch
    window.localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags]) // deep watch tags change

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
  const deleteTag = (tagId: number) => {
    setTags(tags.filter(item => item.tagId !== tagId))
  }
  const editTag = (tagId: number, newTagName: string) => {
    setTags(tags.map(item => {
      if (item.tagId === tagId) {
        return {tagId, tagName: newTagName}
      }
      return item
    }))
  }
  const findTag = (id: number) => {
    return tags.filter(item => item.tagId === id)[0]
  }

  return {tags, setTags, addTag, deleteTag, editTag, findTag}
}

export {useTags}
