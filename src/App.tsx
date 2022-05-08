import React from 'react';
import {HashRouter, Routes, Route, Navigate} from "react-router-dom";
import styled from "styled-components";

import Money from "./views/money";
import Labels from "./views/labels";
import LabelDetail from "./views/labels/detail";
import Statistics from "./views/statistics";
import NotFound from "./views/NotFound";

function App() {
  return (
      <Main>
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
      </Main>
  );
}

export default App;

const Main = styled.main`
  max-width: 420px;
  margin: 0 auto;
`;
