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
    if (obj.amount && obj.amount.length > 16) {
      obj.amount = obj.amount.slice(0, 16)
    }
    setSelected({...selected, ...obj})
  }
  const submit = () => {
    alert('您有一笔账单已被记录在册！');
    setSelected({ // UI刷新
      tag: '餐饮',
      note: '',
      category: '-' as ('-' | '+'),
      amount: '0',
      createdTime: new Date()
    })
  }

  return (
      <Layout title={'记账'}>
        <TagsSection value={selected.tag} onChange={(tag) => {onChange({tag})}}/>
        <NoteSection value={selected.note} onChange={(note) => {onChange({note})}}/>
        <CategorySection value={selected.category} onChange={(category) => {onChange({category})}}/>
        <NumberPadSection value={selected.amount} onChange={(amount) => {onChange({amount})}} onOk={submit}/>
      </Layout>
  )
}
export default Money;
