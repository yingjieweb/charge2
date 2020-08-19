import Layout from "../components/Layout";
import React, {useState} from "react";
import {TagsSection} from '../components/money/TagsSection'
import {NoteSection} from '../components/money/NoteSection'
import {CategorySection} from '../components/money/CategorySection'
import {NumberPadSection} from '../components/money/NumberPadSection'

function Money() {
  const [selected, setSelected] = useState({
    tag: '餐饮',
    note: '',
    category: '-' as ('-' | '+'),
    amount: '0'
  })
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj})
  }
  return (
      <Layout title={'记账'}>
        <TagsSection value={selected.tag} onChange={(tag) => {onChange({tag})}}/>
        <NoteSection value={selected.note} onChange={(note) => {onChange({note})}}/>
        <CategorySection value={selected.category} onChange={(category) => {onChange({category})}}/>
        <NumberPadSection value={selected.amount} onChange={(amount) => {onChange({amount})}}/>
      </Layout>
  )
}

export default Money;
