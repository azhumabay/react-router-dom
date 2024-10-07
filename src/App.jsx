import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Contacts, Error, Login } from "./pages";
import AppLayout from "./layout/AppLayout";
import Container from "@mui/material/Container";
import ProtectedRoute from "./hoc/ProtectedRoute";

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Container>
  );
}
