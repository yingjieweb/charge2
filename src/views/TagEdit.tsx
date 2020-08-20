import React from "react";
import {useTags} from "../scripts/useTags";
import {useParams} from "react-router-dom"

type Params = {
  routerTag: string;
}

const TagEdit:React.FC = () => {
  const {findTag} = useTags();
  let {routerTag} = useParams<Params>();
  const matchedTag = findTag(routerTag);
  return (
    <div>{matchedTag}</div>
  )
}

export {TagEdit}
