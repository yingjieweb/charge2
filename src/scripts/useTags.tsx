import {useState} from "react";

const useTags = () => {
  const [tags, setTags] = useState<string[]>(['餐饮', '购物', '交通', '娱乐', '工资']);
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
  const saveTag = (routerTag:string, newTag:string) => {
    console.log(newTag);
    setTags(tags.map((tag) => {
      return tag === routerTag ? newTag : tag;
    }))
    console.log(tags)

    /*const tagsClone = JSON.parse(JSON.stringify(tags));
    let matchedTagIndex = tagsClone.indexOf(matchedTag);
    tagsClone.splice(matchedTagIndex, 1);
    tagsClone.push(newTag);
    setTags(tagsClone);*/
  };
  const deleteTag = (matchedTag:string) => {
    console.log('delete');
    setTags(tags.filter(item => item !== matchedTag));
    console.log(tags);
  }
  return {tags, setTags, addTag, findTag, saveTag, deleteTag};
}

export {useTags}
