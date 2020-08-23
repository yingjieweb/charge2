import React from "react";
import {useTags} from "../scripts/useTags";
import {useParams} from "react-router-dom"
import Layout from "../components/Layout";
import { Button } from "components/Button";

type Params = {
  routerTag: string;
}

const TagEdit:React.FC = () => {
  const {findTag} = useTags();
  let {routerTag} = useParams<Params>();
  const matchedTag = findTag(routerTag);
  return (
      <Layout title='编辑标签' leftIconName='left'>
        <div>{matchedTag}</div>
        <div>
          <label>
            <span>标签名</span>
            <input type="text" placeholder="请输入标签名"/>
          </label>
        </div>
        <div>
          <Button>保存</Button>
          <Button>删除</Button>
        </div>
      </Layout>
  )
}

export {TagEdit}
