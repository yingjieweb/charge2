import React from "react";
import Layout from "../../components/Layout";
import {TagsSection} from "./components/TagsSection";
import {NoteSection} from "./components/NoteSection";
import {CategorySection} from "./components/CategorySection";
import {NumberPadSection} from "./components/NumberPadSection";


function Labels() {
  return (
      <Layout title={'记账'}>
        <TagsSection value={'标签'} onChange={() => {}}/>
        <NoteSection value={'备注'} onChange={() => {}}/>
        <CategorySection value={'+'} onChange={() => {}}/>
        <NumberPadSection value={'1111'}/>
      </Layout>
  )
}
export default Labels;
