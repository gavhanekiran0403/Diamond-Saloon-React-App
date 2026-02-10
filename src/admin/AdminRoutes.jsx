import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout";
import CustomerList from "./pages/customer/CustomerList";
import StaffList from "./pages/staff/StaffList";
import ServiceList from "./pages/saloonService/ServiceList";
import ServiceForm from "./pages/saloonService/ServiceForm";
import PackageList from "./pages/saloonPackage/PackageList";
import PackageForm from "./pages/saloonPackage/PackageForm";
import CategoryList from "./pages/productCategory/CategoryList";
import CategoryForm from "./pages/productCategory/CategoryForm";
import StaffForm from "./pages/staff/StaffForm";
import ProductList from "./pages/product/ProductList";
import ProductForm from "./pages/product/ProductForm";
import AppointmentList from "./pages/appointment/AppointmentList";
import OrderList from "./pages/order/OrderList";
import PaymentList from "./pages/payment/PaymentList";
import AdminLogin from "./pages/login/AdminLogin";
import TimeSlotSettings from "./pages/timeslot/TimeSlotSettings";
import Settings from "./pages/settings/CreateSettings";
import Reports from "./pages/reports/Reports";
import OrderDetails from "./pages/order/OrderDetails";
import AppointmentForm from "./pages/appointment/AppointmentForm";
import AdminNotification from "./pages/notification/AdminNotification";

function AdminRoutes() {
  return (
    <Routes>
      {/* ✅ ADMIN LOGIN */}
      <Route path="login" element={<AdminLogin />} />

      {/* ✅ ADMIN PANEL */}
      <Route element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />

        <Route path="appointments" element={<AppointmentList />} />
        <Route path="appointments/add" element={<AppointmentForm />} />

        <Route path="customers" element={<CustomerList />} />

        <Route path="staff" element={<StaffList />} />
        <Route path="staff/add" element={<StaffForm />} />
        <Route path="staff/edit/:staffId" element={<StaffForm />} />

        <Route path="services" element={<ServiceList />} />
        <Route path="services/add" element={<ServiceForm />} />
        <Route path="services/edit/:serviceId" element={<ServiceForm />} />

        <Route path="service-packages" element={<PackageList />} />
        <Route path="service-packages/add" element={<PackageForm />} />
        <Route path="service-packages/edit/:packageId" element={<PackageForm />} />

        <Route path="categories" element={<CategoryList />} />
        <Route path="categories/add" element={<CategoryForm />} />
        <Route path="categories/edit/:categoryId" element={<CategoryForm />} />

        <Route path="products" element={<ProductList />} />
        <Route path="products/add" element={<ProductForm />} />
        <Route path="products/edit/:productId" element={<ProductForm />} />

        <Route path="orders" element={<OrderList />} />
        <Route path="orders/:orderId" element={<OrderDetails />} />

        <Route path="payments" element={<PaymentList />} />

        <Route path="timeslots" element={<TimeSlotSettings />} />

        <Route path="reports" element={<Reports />} />

        <Route path="settings" element={<Settings />} />

        <Route path="notifications" element={<AdminNotification />} />

      </Route>
    </Routes>
  );
}

export default AdminRoutes;
