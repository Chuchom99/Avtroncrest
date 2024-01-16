import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Mainlayout from './Mainlayout';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="*" element={<Mainlayout />} />
      </Routes>
    </Router>
  );
}

export default App;
