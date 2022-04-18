import React, {useState} from "react";
import Layout from "../../components/Layout";
import {TagsSection} from "./components/TagsSection";
import {NoteSection} from "./components/NoteSection";
import {CategorySection} from "./components/CategorySection";
import {NumberPadSection} from "./components/NumberPadSection";
import {useRecord} from "../../scripts/useRecord";

function Money() {
  const [selected, setSelected] = useState({
    tagId: 1,
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
  const {addRecord} = useRecord();
  const submit = () => {
    if (selected.amount === '0') {
      return alert('请输入支出或收入的具体金额 !')
    }
    addRecord(selected);
    alert('您有一笔账单已被记录在册！');
    setSelected({ // UI刷新
      tagId: 1,
      note: '',
      category: '-' as ('-' | '+'),
      amount: '0',
      createdTime: new Date()
    })
  }

  return (
      <Layout title={'记账'}>
        <TagsSection value={selected.tagId} onChange={(tagId) => {onChange({tagId})}}/>
        <NoteSection value={selected.note} onChange={(note) => {onChange({note})}}/>
        <CategorySection value={selected.category} onChange={(category) => {onChange({category})}}/>
        <NumberPadSection value={selected.amount} onChange={(amount) => {onChange({amount})}} onOk={submit}/>
      </Layout>
  )
}
export default Money;
