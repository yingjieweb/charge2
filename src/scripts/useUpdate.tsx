import {useEffect, useRef} from 'react';

const useUpdate = (fun: () => void, deps: any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current > 1) {
      fun();
    }
  }, deps); // 不可变数据
};

export {useUpdate}
