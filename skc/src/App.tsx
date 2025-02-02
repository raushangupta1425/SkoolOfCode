import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ChatPage from "./pages/ChatPage"
import CoursePage from "./pages/CoursePage"
import CommunityPage from "./pages/CommunityPage"
import AchievementsPage from "./pages/AchievementsPage"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

