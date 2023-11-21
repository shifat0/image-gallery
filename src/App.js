import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import PhotoDetails from "./Pages/PhotoDetails";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

const App = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/gallery" />} />
      <Route path="/gallery" element={<Home />} />
      <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
      <Route
        path="/signup"
        element={token ? <Navigate to="/" /> : <Signup />}
      />
      <Route
        element={
          token ? (
            <Outlet />
          ) : (
            <Navigate to="/login" replace state={{ from: location }} />
          )
        }
      >
        <Route path="/gallery/:id" element={<PhotoDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
