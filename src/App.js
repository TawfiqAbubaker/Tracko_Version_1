import { Nav } from "./Components/Nav";
import { HomePage } from "./Pages/HomePage";
import "./index.css";
import { Track } from "./Pages/Track";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Visualize } from "./Pages/Visualize";
import { Feedback } from "./Pages/Feedback";
function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/Tracko_Version_1/" element={<HomePage/>} />
                <Route path="/Tracko_Version_1/track" element={<Track />} />
                <Route path="/Tracko_Version_1/Visualize" element={<Visualize/>}/>
                <Route path="/Tracko_Version_1/Feedback" element={<Feedback/>}/>
            </Routes>
        </Router>
    );
}

export default App;
