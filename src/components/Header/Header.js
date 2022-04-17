import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../../FireBase/Firebase.init";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  console.log(currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser({});
      }
    });

    return () => unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="header-area">
      <nav className="d-flex justify-content-around">
        <div className="title">
          <h1>
            Power <span>Zone</span>
          </h1>
        </div>
        <Link className="link" to="/home">
          Home
        </Link>
        <Link className="link" to="/services">
          Services
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/blogs">
          Blogs
        </Link>
        {currentUser?.email ? (
          <button onClick={handleLogout} className="link">
            Logout
          </button>
        ) : (
          <Link className="link"
            to='/login'
          >
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
