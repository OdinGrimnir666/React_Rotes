import { Routes, Route, Navigate } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Blogpage } from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Singlepage } from "./pages/Singlepage";
import { Layout } from "./components/Layout";
import { Aboutpage } from "./pages/Aboutpage";
import { Createpost } from "./pages/Createpost";
import { Editpost } from "./pages/Editpost";
import { RequireAuth } from "./hoc/RequireAuth";
import { Loginpage } from "./pages/Loginpage";
import { AuthProvider } from "./hoc/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<Homepage />} />
          <Route path="about/*" element={<Aboutpage />} />
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage></Blogpage>} />
          <Route path="post/:id" element={<Singlepage />} />
          <Route
            path="post/new"
            element={
              <RequireAuth>
                <Createpost />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Loginpage />} />
          <Route path="post/:id/edit" element={<Editpost />} />
          <Route path="#" element={<Notfoundpage></Notfoundpage>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
