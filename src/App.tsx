
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Nouveautes from "./pages/Nouveautes";
import Login from "./pages/Login";
import ContentDetails from "./pages/ContentDetails";
import NotFound from "./pages/NotFound";
import MyList from "./pages/MyList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/films" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/nouveautes" element={<Nouveautes />} />
        <Route path="/ma-liste" element={<MyList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/films/:contentId" element={<ContentDetails />} />
        <Route path="/series/:contentId" element={<ContentDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
