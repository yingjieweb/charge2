import {useEffect, useRef, useState} from "react";

type RecordItem = {
  tagId: number;
  note: string;
  category: '-' | '+';
  amount: string;
  createdTime: Date;
}

const useRecord = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  const freshCount = useRef(0) // 标记生命周期： created or mounted
  useEffect(() => {
    freshCount.current += 1
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, []) // mounted
  useEffect(() => {
    if (freshCount.current < 1) return // 忽视 records 初始化那次 -> 类似 Vue 非 deep watch
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records]) // deep watch records change

  const addRecord = (record: RecordItem) => {
    setRecords([...records, record])
  }

  return {records, addRecord}
}

export {useRecord}
