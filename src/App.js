import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Electronics from './components/Electronics';
import Grocery from './components/Grocery';
import Cpp from './components/Cpp';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import NoPage from './components/NoPage';
import Buttom from './components/Buttom';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/homepage" element={<HomePage/>} />
      <Route path="/electronics" element={<Electronics/>} />
      <Route path="/grocery" element={<Grocery/>} />
      <Route path="/cpp" element={<Cpp/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    <Buttom/>
    </BrowserRouter>
  );
};

export default App;
