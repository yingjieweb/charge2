import {useEffect, useState} from "react";

const useTags = () => {
  const [tags, setTags] = useState<string[]>([]); //"['餐饮', '购物', '交通', '娱乐', '工资']"
  useEffect(() => { //[] 模拟 ComponentDidMount() 生命周期
    setTags(JSON.parse(window.localStorage.getItem('tags') || '[]')); //页面第一次加载没有localstorage？
    setTags(['餐饮', '购物', '交通', '娱乐', '工资']);
  }, [])
  useEffect(() => {
    localStorage.setItem('tags',JSON.stringify(tags))
  }, [tags])
  const addTag = () => {
    let newTag = window.prompt('请输入新的标签名');
    if (newTag === null || newTag === ''){
      window.alert('新标签名不能为空');
    }else if (tags.indexOf(newTag) >= 0){
      window.alert('当前标签已存在');
    }else {
      setTags([...tags, newTag]);
    }
  }
  const findTag = (tagParams:string) => {return tags.filter(tag => tag === tagParams)[0]};
  const findTagId = (tagName:string) => {return tags.indexOf(tagName)};
  const saveTag = (matchedTagId:number, newTag:string) => {
    let tagsClone = tags;
    tagsClone.splice(matchedTagId,1, newTag);
    setTags(tagsClone);
  };
  const deleteTag = (matchedTagId:number) => {
    let tagsClone = tags;
    tagsClone.splice(matchedTagId,1);
    setTags(tagsClone);
    alert('删除成功');
    window.history.back();
  }
  return {tags, setTags, addTag, findTag, findTagId, saveTag, deleteTag};
}

export {useTags}
