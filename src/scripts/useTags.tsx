import {useState} from "react";

const useTags = () => {
  const [tags, setTags] = useState<string[]>(['餐饮', '购物', '交通', '娱乐', '工资']);
  const findTag = (tagParams:string) => {return tags.filter(tag => tag === tagParams)}
  return {tags, setTags, findTag};
}

export {useTags}
