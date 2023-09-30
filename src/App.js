import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import WatchHistory from "./Pages/WatchHistory";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="homepage" element={<HomePage />}></Route>
        <Route path="watchhistory" element={<WatchHistory />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
