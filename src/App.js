import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import News from './pages/Home/News/News';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Competitions from './pages/competitions/Competitions';
import Competition from './pages/Competition/Competition';
import Standings from './pages/Competition/standings/Standings';
import Teams from './pages/Competition/Teams/Teams';
import Scoures from './pages/Competition/Scoures/Scoures';
import Matches from './pages/Competition/Matches/Matches';
import Transfers from './pages/Competition/Transfers/Transfers';
import PMatches from './pages/Matches/Matches';
import SingleMatch from './pages/SingleMatch/SingleMatch';
import Team from './pages/Team/Team';
import Player from './pages/Player/Player';
function App() {
  return (
    <div className="App">
      <Router>
           <Header />
           <div style={{minHeight:"70vh"}}>
                <Routes>
                    <Route  path="/" element={<Home/>}/>
                    <Route  path="news" element={<News/>}/>
                    <Route  path="/competitions/all" element={<Competitions/>}/>
                    <Route  path="/competition/:id/:name" element={<Competition/>}/>
                    <Route  path="/competition/:id/:name/standings" element={<Standings/>}/>
                    <Route  path="/competition/:id/:name/teams" element={<Teams/>}/>
                    <Route  path="/competition/:id/:name/scorers" element={<Scoures/>}/>
                    <Route  path="/competition/:id/:name/matches" element={<Matches/>}/>
                    <Route  path="/competition/:id/:name/transfers" element={<Transfers/>}/>
                    <Route  path='/matches' element={<PMatches/>} />
                    <Route  path='/match/:id' element={<SingleMatch/>} />
                    <Route  path='/teams/:id' element={<Team/>} />
                    <Route  path='/player/:id' element={<Player/>}/>
                    

                </Routes>
           </div>
       <Footer />
      </Router>
    </div>
  );
}

export default App;
