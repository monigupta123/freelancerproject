import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AboutScreen from './screens/AboutScreen';
import Navigation from './components/Navigation';
import AddTraining from './screens/AddTraining';
import AllTraining from './screens/AllTraining';
import AllFreelancerScreen from './screens/AllFreelancerScreen';



function App() {
  return (
      <div>
        <Router>
        <Navigation />
        <div className='container'>
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/signup" element={<SignupScreen/>} />
            <Route path="/signin" element={<LoginScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/addtraining" element={<AddTraining/>}/>
            <Route path="/alltraining" element={<AllTraining/>}/>
            <Route path="/allfreelancer" element={<AllFreelancerScreen/>}/>
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
