import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./user/pages/landing/LandingPage";
import UserRoutes from "./user/UserRoutes";
import AdminRoutes from "./admin/AdminRoutes";
import UserLayout from "./user/layouts/UserLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page WITH Navbar */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        {/* User Routes */}
        <Route path="/user/*" element={<UserRoutes />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
