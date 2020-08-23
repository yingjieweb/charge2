import React from "react";
import {useTags} from "../scripts/useTags";
import {useParams} from "react-router-dom"
import Layout from "../components/Layout";
import { Button } from "components/Button";
import {Input} from "../components/Input";

type Params = {
  routerTag: string;
}

const TagEdit:React.FC = () => {
  const {findTag} = useTags();
  let {routerTag} = useParams<Params>();
  const matchedTag = findTag(routerTag);
  return (
      <Layout title='编辑标签' leftIconName='left'>
        <div>
          <Input></Input>
        </div>
        <div>
          <Button>保存</Button>
          <Button>删除</Button>
        </div>
      </Layout>
  )
}

export {TagEdit}
