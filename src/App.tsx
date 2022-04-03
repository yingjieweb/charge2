import React from 'react';
import {HashRouter, Routes, Route, Navigate} from "react-router-dom";

import Money from "./views/money";
import Labels from "./views/labels";
import LabelDetail from "./views/labels/detail";
import Statistics from "./views/statistics";
import NotFound from "./views/NotFound";

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/money" replace/>}/>
          <Route path="/money" element={<Money/>}/>
          <Route path="/labels" element={<Labels/>}/>
          <Route path="/tag/:tagId" element={<LabelDetail/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
