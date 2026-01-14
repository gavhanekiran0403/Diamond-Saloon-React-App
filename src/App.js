import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoutes from "./user/UserRoutes";
import AdminRoutes from "./admin/AdminRoutes";
import Home from "./user/pages/dashboard/Home";   // ✅ import home

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ Public Home */}
        <Route path="/" element={<Home />} />

        {/* ✅ User Module */}
        <Route path="/user/*" element={<UserRoutes />} />

        {/* ✅ Admin Module */}
        <Route path="/admin/*" element={<AdminRoutes />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
