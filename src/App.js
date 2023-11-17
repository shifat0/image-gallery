import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PhotoDetails from "./Pages/PhotoDetails";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/gallery" />} />
          <Route path="/gallery" element={<Home />} />
          <Route path="/gallery/:id" element={<PhotoDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
