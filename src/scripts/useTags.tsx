import {useEffect, useRef, useState} from "react";

let isFirstLoad = true; //标记是否第一次加载页面！

const useTags = () => {
  const [tags, setTags] = useState<string[]>(JSON.parse(window.localStorage.getItem('tags') || `[]`));
  useEffect(() => {
    if (isFirstLoad){  //页面第一次加载没有localstorage？
      setTags(['餐饮', '购物', '交通', '娱乐', '工资']);
      isFirstLoad = !isFirstLoad;
    }
  }, []); //[] 模拟 ComponentDidMount() 生命周期
  let count = useRef(0);
  useEffect(() => {
    count.current ++;
    console.log(count.current);
  })
  useEffect(() => {
    if (count.current > 1){
      console.log('存数据了---'+'当前的tags是:' + tags);
      localStorage.setItem('tags', JSON.stringify(tags));
    }
  }, [tags]);
  const addTag = () => {
    let newTag = window.prompt('请输入新的标签名');
    if (newTag === null || newTag === ''){
      window.alert('新标签名不能为空');
    }else if (tags.indexOf(newTag) >= 0){
      window.alert('当前标签已存在');
    }else {
      let tagsClone = tags
      tagsClone.push(newTag);
      setTags([...tagsClone]);
      console.log(tags)
      localStorage.setItem('tags', JSON.stringify(tags));
    }
  }
  const findTag = (tagParams:string) => {return tags.filter(tag => tag === tagParams)[0]};
  const findTagId = (tagName:string) => {return tags.indexOf(tagName)};
  const saveTag = (matchedTagId:number, newTag:string) => {
    let tagsClone = tags;
    tagsClone.splice(matchedTagId,1, newTag);
    setTags(tagsClone);
    console.log(tags)
    localStorage.setItem('tags', JSON.stringify(tags));
    alert('保存成功');
    window.history.back();
  };
  const deleteTag = (matchedTagId:number) => {
    let tagsClone = tags;
    tagsClone.splice(matchedTagId,1);
    setTags(tagsClone);
    localStorage.setItem('tags', JSON.stringify(tags));
    alert('删除成功');
    window.history.back();
  }
  return {tags, setTags, addTag, findTag, findTagId, saveTag, deleteTag};
}

export {useTags}
