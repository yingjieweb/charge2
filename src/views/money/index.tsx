import React, {useState} from "react";
import Layout from "../../components/Layout";
import {TagsSection} from "./components/TagsSection";
import {NoteSection} from "./components/NoteSection";
import {CategorySection} from "./components/CategorySection";
import {NumberPadSection} from "./components/NumberPadSection";

function Money() {
  const [selected, setSelected] = useState({
    tag: '餐饮',
    note: '',
    category: '-' as ('-' | '+'),
    amount: '0',
    createdTime: new Date()
  })

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj})
  }

  return (
      <Layout title={'记账'}>
        <TagsSection value={selected.tag} onChange={(tag) => {onChange({tag})}}/>
        <NoteSection value={selected.note} onChange={(note) => {onChange({note})}}/>
        <CategorySection value={'+'} onChange={() => {}}/>
        <NumberPadSection value={'1111'}/>
      </Layout>
  )
}
export default Money;
