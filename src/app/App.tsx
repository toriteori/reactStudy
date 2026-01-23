import Header from './components/layout/header/header';
import Main from './components/layout/main/main';
import Detail from './components/pages/Detail/Detail';
import SubDetail from './components/pages/Detail/SubDetail';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Main/>} />
      </Routes>
    </>
  );
}

export default App;
