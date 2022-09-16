
import './App.css';
import MintPage from './Components/MintPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MintPage />} />
      </Routes>
    </Router>

  );
}

export default App;
