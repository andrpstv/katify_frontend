import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { AuthProvider, useAuth } from "./context/AuthContext";

const Private = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/auth" replace />;
};

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Private><Dashboard /></Private>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}
