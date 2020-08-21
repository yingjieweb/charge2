import React from "react";
import {useTags} from "../scripts/useTags";
import {useParams} from "react-router-dom"
import Layout from "../components/Layout";

type Params = {
  routerTag: string;
}

const TagEdit:React.FC = () => {
  const {findTag} = useTags();
  let {routerTag} = useParams<Params>();
  const matchedTag = findTag(routerTag);
  return (
      <Layout title='编辑标签'>
        <div>{matchedTag}</div>
      </Layout>
  )
}

export {TagEdit}
