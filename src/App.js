import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import PhotoDetails from "./Pages/PhotoDetails";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

const App = () => {
  const location = useLocation();
  const localToken = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/gallery" />} />
      <Route path="/gallery" element={<Home />} />
      <Route
        path="/login"
        element={localToken ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/signup"
        element={localToken ? <Navigate to="/" /> : <Signup />}
      />
      <Route
        element={
          localToken ? (
            <Outlet />
          ) : (
            <Navigate to="/login" state={{ from: location }} />
          )
        }
      >
        <Route path="/gallery/:id" element={<PhotoDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
