import React from "react";
import {useParams} from "react-router-dom"
import {useTags} from "../../scripts/useTags";

function Detail() {
  const {findTag} = useTags()
  let {tagId} = useParams();

  const currentTag = findTag(parseInt(tagId!))

  return (
      <div>{currentTag.tagName}</div>
  )
}
export default Detail;
