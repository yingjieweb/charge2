import Layout from "../components/Layout";
import React from "react";
import {TagsSection} from '../components/money/TagsSection'
import {NotesSection} from '../components/money/NotesSection'
import {CategorySection} from '../components/money/CategorySection'
import {NumberPadSection} from '../components/money/NumberPadSection'

function Money() {
  return (
      <Layout title={'记账'}>
        <TagsSection>
          <ol>
            <li>餐饮</li>
            <li>购物</li>
            <li>交通</li>
            <li>娱乐</li>
            <li>工资</li>
          </ol>
          <button>添加标签</button>
        </TagsSection>
        <NotesSection>
          <label>
            <span>备注</span>
            <input type="text" placeholder="请输入账单备注"/>
          </label>
        </NotesSection>
        <CategorySection>
          <ul>
            <li className="selected">支出</li>
            <li>收入</li>
          </ul>
        </CategorySection>
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
