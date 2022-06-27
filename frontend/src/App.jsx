import { Route, Routes } from "react-router-dom";
import { Chatpage, Homepage } from "./Pages";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
