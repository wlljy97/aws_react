import { Route, Routes } from "react-router-dom";
import CustomerInputTest from "./pages/CustomerInputTest/CustomerInputTest";
import InputTest from "./pages/InputTest/InputTest";
import Main from "./pages/Main/Main";
import MyPage from "./pages/MyPage/MyPage";


function App() {
  return (
    <>
    {/* <Main /> */}
    {/* <InputTest /> */}
    {/* <CustomerInputTest /> */}
    {/* <MyPage /> */}
    <Routes>
      <Route path="/" element={ <Main/> } />
      <Route path="/customerinputtest" element={ <CustomerInputTest/> } />
      <Route path="/inputtest" element={<InputTest/> } />
      <Route path="/mypage" element={ <MyPage/> } />
    </Routes>
    </>
  );
}

export default App;
