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
        <NumberPadSection>
          <div className="output">
            0￥
          </div>
          <div className="pad clearfix">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="ok">OK</button>
            <button className="zero">0</button>
            <button className="dot">.</button>
          </div>
        </NumberPadSection>
      </Layout>
  )
}

export default Money;
