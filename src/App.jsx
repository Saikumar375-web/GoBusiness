import LoginForm from "./components/LoginPage";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import ReferralDetailsPage from "./components/ReferralDetailsPage";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/referral/:id"
        element={
          <ProtectedRoute>
            <ReferralDetailsPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
