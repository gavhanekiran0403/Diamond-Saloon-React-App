import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout";
import CustomerList from "./pages/customer/CustomerList";
import StaffList from "./pages/staff/StaffList";
import ServiceList from "./pages/saloonService/ServiceList";
import ServiceForm from "./pages/saloonService/ServiceForm";
import PackageList from "./pages/servicePackage/PackageList";
import PackageForm from "./pages/servicePackage/PackageForm";
import CategoryList from "./pages/category/CategoryList";
import CategoryForm from "./pages/category/CategoryForm";
import StaffForm from "./pages/staff/StaffForm";
import ProductList from "./pages/product/ProductList";
import ProductForm from "./pages/product/ProductForm";
import AppointmentList from "./pages/appointment/AppointmentList";
import OrderList from "./pages/order/OrderList";
import PaymentList from "./pages/payment/PaymentList";
import AdminLogin from "./pages/login/AdminLogin";

function AdminRoutes() {
    return(
        <Routes>

          {/* ✅ ADMIN LOGIN */}
          <Route path="login" element={<AdminLogin />} />

            {/* Admin Routes */}
            <Route element={<AdminLayout />}>
                <Route index element={<AdminDashboard/>} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />

                <Route path="/appointments" element={<AppointmentList />} />

                <Route path="/customers" element={<CustomerList />} />

                <Route path="/staff" element={<StaffList />}/>
                <Route path="/staff/add" element={<StaffForm />}/>

                <Route path="/services" element={<ServiceList />}/>
                <Route path="/services/add" element={<ServiceForm />}/>

                <Route path="/service-packages" element={<PackageList />}/>
                <Route path="/service-packages/add" element={<PackageForm />}/>

                <Route path="/categories" element={< CategoryList/>}/>
                <Route path="/categories/add" element={< CategoryForm/>}/>

                <Route path="/products" element={<ProductList />}/>
                <Route path="/products/add" element={<ProductForm />}/>

                <Route path="/orders" element={<OrderList />}/>

                <Route path="/payments" element={<PaymentList />}/>

            </Route>
        </Routes>
    );
};

export default AdminRoutes;
