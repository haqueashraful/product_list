import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/MyContext";
import SearchInput from "../Component/SearchInput";

const Nav = () => {
  const { user, signOut } = useContext(AuthContext);

  const handleLogout = () => {
    signOut();
  };

  return (
    <nav className="bg-gray-800 w-full text-white p-4 md:flex  justify-between space-y-5 items-center">
      {/* Company Name */}
      <div className="text-xl font-bold">Product_List</div>

      <div className="md:hidden flex justify-between items-center">
        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/#" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/#" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <span>{user.displayName || "User"}</span>{" "}
              {/* Fallback text if username is not available */}
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      <div className="md:w-1/3 w-full">
        <SearchInput />
      </div>

      {/* Navigation Links */}
      <div className="space-x-4 hidden md:flex">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/#" className="hover:text-gray-400">
          About
        </Link>
        <Link to="/#" className="hover:text-gray-400">
          Contact
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex">
        {user ? (
          <div className="flex items-center space-x-4">
            <span>{user.displayName || "User"}</span>{" "}
            {/* Fallback text if username is not available */}
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
