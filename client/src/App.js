import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Mainlayout from './Mainlayout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import UserDashboard from './UserDashboard';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="*" element={<Mainlayout />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<UserDashboard/>} />

      </Routes>
    </Router>
  );
}

export default App;
