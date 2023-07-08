import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import SurevyPage from './Pages/Survey/Survey';
import PrivacyPolicy from './Pages/privacy/privacyPolicy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/survey" element={<SurevyPage />} />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
