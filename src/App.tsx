import React from 'react';
import {HashRouter, Routes, Route, Navigate, Link} from "react-router-dom";

function App() {
  return (
      <HashRouter>
        <Link to="/money">money</Link>
        <Link to="/labels">labels</Link>
        <Routes>
          <Route path="/" element={<Navigate to="/money" replace/>}/>
          <Route path="/money" element={'money'}/>
          <Route path="/labels" element={'labels'}/>
          <Route path="/tag/:routerTag" element={'tag'}/>
          <Route path="/statistics" element={'statistics'}/>
          <Route path="*" element={'404'}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
