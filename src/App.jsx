import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  AuthUserPostList,
  UserList,
  Error,
  Login,
  User,
  UserPost,
} from "./pages";
import AppLayout from "./layout/AppLayout";
import Container from "@mui/material/Container";
import ProtectedRoute from "./hoc/ProtectedRoute";
import { AuthProvider } from "./context/AuthProvider";

export default function App() {
  return (
    <Container>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<AppLayout />} />}>
            <Route index element={<Home />} />
            <Route path="post-list" element={<AuthUserPostList />} />
            <Route path="user-list" element={<UserList />} />
            <Route path="user/:id/post-list" element={<User />} />
            <Route path="user/:userId/post/:postId" element={<UserPost />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </AuthProvider>
    </Container>
  );
}
