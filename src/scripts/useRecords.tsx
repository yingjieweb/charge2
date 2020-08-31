import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";

type RecordItem = {
  tag: string;
  note: string;
  category: '-' | '+';
  amount: string;
  createdTime?: Date;
}

const useRecord = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(localStorage.getItem('records') || '[]'));
  }, [])
  useUpdate(() => {
    localStorage.setItem('records', JSON.stringify(records))
  }, [records])

  const addRecord = (record: RecordItem) => {
    setRecords([...records, record])
  }

  return {records, addRecord}
}

export {useRecord}
