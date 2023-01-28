import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatgpt from './pages/Chatgpt';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatgpt" element={<Chatgpt />} />
          {/* <Route path="/chatgpt" element={<Chatgpt />} /> */}
          {/* <Route path="/*" element={<NotFound />} /> */}

        </Routes>
      </Router>

    </div>
  );
}

export default App;
