import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import UserRoutes from "./user/UserRoutes";
import AdminRoutes from "./admin/AdminRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* ✅ User */}
        <Route path="/user/*" element={<UserRoutes />} />

        {/* ✅ Admin */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;