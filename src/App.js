import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRoutes from "./user/UserRoutes";
import AdminRoutes from "./admin/AdminRoutes";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRoutes/>}/>
          <Route path="/admin/*" element={<AdminRoutes/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
