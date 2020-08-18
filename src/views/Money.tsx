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
  return (
      <Layout title={'记账'}>
        {selected.tag.toString()}
        <br/>
        {selected.note.toString()}
        <br/>
        {selected.category.toString()}
        <br/>
        {selected.amount.toString()}
        <TagsSection value={selected.tag} onChange={(tag) => {setSelected({...selected, tag: tag})}}/>
        <NoteSection value={selected.note} onChange={(note) => {setSelected({...selected, note: note})}}/>
        <CategorySection value={selected.category} onChange={(category) => {setSelected({...selected, category: category})}}/>
        <NumberPadSection value={selected.amount} onChange={(amount) => {setSelected({...selected, amount: amount})}}/>
      </Layout>
  )
}

export default Money;
