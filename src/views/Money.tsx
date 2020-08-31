import Layout from "../components/Layout";
import React, {useState} from "react";
import {TagsSection} from '../components/money/TagsSection'
import {NoteSection} from '../components/money/NoteSection'
import {CategorySection} from '../components/money/CategorySection'
import {NumberPadSection} from '../components/money/NumberPadSection'
import {useRecord} from "../scripts/useRecords";

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
  const {addRecord} = useRecord();
  const submit = () => {
    addRecord(selected);
    alert('您有一笔账单已被记录在册！');
    setSelected({ //UI刷新
      tag: '餐饮',
      note: '',
      category: '-' as ('-' | '+'),
      amount: '0',
      createdTime: new Date()
    })
  }
  return (
      <Layout title={'记账'}>
        {JSON.stringify(selected)}
        <TagsSection value={selected.tag} onChange={(tag) => {onChange({tag})}}/>
        <NoteSection value={selected.note} onChange={(note) => {onChange({note})}}/>
        <CategorySection value={selected.category} onChange={(category) => {onChange({category})}}/>
        <NumberPadSection value={selected.amount} onChange={(amount) => {onChange({amount})}} onOk={submit}/>
      </Layout>
  )
}

export default Money;
