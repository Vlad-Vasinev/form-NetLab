
import './App.css';

import Form from './components/form/form';
import MainRoot from './components/mainRoot/mainRoot';
import ChangeData from './components/changeData/changeData';
import StartRoute from './components/startRoute/startRoute';

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartRoute />} />
          <Route path="/form" element={<Form />} />
          <Route path="/mainRoot" element={<MainRoot />} />
          <Route path="/changeData" element={<ChangeData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
