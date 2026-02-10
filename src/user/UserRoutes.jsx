import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import UserLogin from "./pages/login/UserLogin";
import UserDashboard from "./pages/dashboard/UserDashboard";
import UserProfile from "./pages/profile/UserProfile";
import UserRegister from "./pages/register/UserRegister";
import UserCart from "./pages/cart/UserCart";

// Packages Page
import UserPackages from "./pages/packages/UserPackages";

// Appointment Pages
import AppointmentForm from "./pages/appointments/AppointmentForm";
import MyAppointments from "./pages/appointments/MyAppointments";

// Product Pages
import UserProducts from "./pages/products/UserProducts";
import ProductDetails from "./pages/products/ProductDetails";

// Checkout & Payment Pages
import CheckoutPage from "./pages/checkout/CheckoutPage";
import PaymentPage from "./pages/payment/PaymentPage";
import SuccessPage from "./pages/payment/SuccessPage";

// Orders Pages
import MyOrders from "./pages/orders/MyOrders";
import OrderDetails from "./pages/orders/OrderDetails";

function UserRoutes() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="login" element={<UserLogin />} />
      <Route path="register" element={<UserRegister />} />

      {/* Protected Pages */}
      <Route element={<UserLayout />}>

        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="profile" element={<UserProfile />} />

        {/* Packages */}
        <Route path="packages" element={<UserPackages />} />

        {/* Products */}
        <Route path="products" element={<UserProducts />} />
        <Route path="products/:productId" element={<ProductDetails />} />

        {/* Cart */}
        <Route path="cart" element={<UserCart />} />

        {/* Checkout Flow */}
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="success" element={<SuccessPage />} />

        {/* Orders */}
        <Route path="orders" element={<MyOrders />} />
        <Route path="orders/:orderId" element={<OrderDetails />} />

        {/* Appointments */}
        <Route path="appointments" element={<AppointmentForm />} />
        <Route path="my-appointments" element={<MyAppointments />} />

      </Route>
    </Routes>
  );
}

export default UserRoutes;
