import {useState} from "react";

const useTags = () => {
  const [tags, setTags] = useState<string[]>(['餐饮', '购物', '交通', '娱乐', '工资']);
  const findTag = (tagParams:string) => {return tags.filter(tag => tag === tagParams)[0]};
  const updateTag = (matchedTag:string, newTag:string) => {
    const tagsClone = JSON.parse(JSON.stringify(tags));
    let matchedTagIndex = tagsClone.indexOf(matchedTag);
    tagsClone.splice(matchedTagIndex, 1);
    tagsClone.push(newTag);
    setTags(tagsClone);
  };
  const deleteTag = () => {
    console.log('delete');
  }
  const saveTag = () => {
    const tagsClone = JSON.parse(JSON.stringify(tags));
    let emptyStrIndex = tagsClone.indexOf('');
    tagsClone.splice(emptyStrIndex, 1);
    setTags(tagsClone);
    alert('保存成功！');
    window.history.back();

  }
  return {tags, setTags, findTag, updateTag, saveTag, deleteTag};
}

export {useTags}
