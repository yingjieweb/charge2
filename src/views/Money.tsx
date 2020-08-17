import Layout from "../components/Layout";
import React from "react";
import {TagsSection} from '../components/money/TagsSection'
import {NoteSection} from '../components/money/NoteSection'
import {CategorySection} from '../components/money/CategorySection'
import {NumberPadSection} from '../components/money/NumberPadSection'

function Money() {
  return (
      <Layout title={'记账'}>
        <TagsSection></TagsSection>
        <NoteSection></NoteSection>
        <CategorySection></CategorySection>
        <NumberPadSection></NumberPadSection>
      </Layout>
  )
}

export default Money;
