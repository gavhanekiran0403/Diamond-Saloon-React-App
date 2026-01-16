import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoutes from "./user/UserRoutes";
import AdminRoutes from "./admin/AdminRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ User Module */}
        <Route path="/user/*" element={<UserRoutes />} />

        {/* ✅ Admin Module */}
        <Route path="/admin/*" element={<AdminRoutes />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
