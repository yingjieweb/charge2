import React from 'react';
import {HashRouter, Routes, Route, Navigate, Link} from "react-router-dom";

import Money from "./views/Money";
import Labels from "./views/Labels";
import TagEdit from "./views/TagEdit";
import Statistics from "./views/Statistics";
import NotFound from "./views/NotFound";

function App() {
  return (
      <HashRouter>
        <Link to="/money">money</Link>
        <Link to="/labels">labels</Link>
        <Routes>
          <Route path="/" element={<Navigate to="/money" replace/>}/>
          <Route path="/money" element={<Money/>}/>
          <Route path="/labels" element={<Labels/>}/>
          <Route path="/tag/:tagId" element={<TagEdit/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
