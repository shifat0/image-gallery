import { Link, useLocation } from "react-router-dom";
import { authLogout, selectCategory } from "../../Redux/Actions";
import { connect } from "react-redux";

const categories = ["Animal", "Cars", "Nature"];

const mapDispatchToProps = (dispatch) => {
  return {
    selectCategory: (category) => dispatch(selectCategory(category)),
    authLogout: () => dispatch(authLogout()),
  };
};

const Navbar = ({ selectCategory, authLogout }) => {
  let location = useLocation();
  const token = localStorage.getItem("token");

  return (
    <div className="bg-[#557C55] text-white p-5">
      <div className="container mx-auto flex justify-between px-3">
        <Link to="/gallery">
          <span className="text-xl font-bold">Photo Gallery</span>
        </Link>
        <div className="flex gap-8 text-black ">
          {location.pathname === "/gallery" && (
            <select
              onChange={(e) => selectCategory(e.target.value)}
              className="w-32 p-1 bg-[#F2FFE9] rounded-md cursor-pointer"
            >
              <option value="">Category</option>
              {categories.map((category, index) => (
                <option key={index}>{category}</option>
              ))}
            </select>
          )}
          {token ? (
            <Link to="/">
              <button
                className="bg-[#F2FFE9] px-5 py-1 rounded-md"
                onClick={authLogout}
              >
                Logout
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="bg-[#F2FFE9] px-5 py-1 rounded-md">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Navbar);
