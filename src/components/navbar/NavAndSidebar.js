import { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "./NavAndSidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../store/types/userConstants";
import Container from "../container/Container";

const NavBar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [openSidebar, setOpenSidebar] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT });
  };

  return (
    <header className="navbarAndSidebar">
      {/* NAVBAR PART */}
      <Container className="navbarContainer">
        <div className="navbarContainerWrapper">
          {/* LEFT NAVBAR */}
          <div className="navbarContainerLeft">
            <div className="navbarContainerHamburger">
              <Hamburger
                toggle={setOpenSidebar}
                toggled={openSidebar}
                color="#fff"
              />
            </div>
            <div className="navbarContainerLogo">
              <span className="">
                <Link to="/">Logo</Link>
              </span>
            </div>
          </div>
          {/* RIGHT NAVBAR */}
          <div className="navbarContainerRightItems">
            {!user ? (
              <>
                <div className="navbarContainerRightItem">
                  <Link className="link" to="/discover">
                    Discover
                  </Link>
                </div>
                <div className="navbarContainerRightItem">
                  <Link className="link" to="/login">
                    Login
                  </Link>
                </div>
                <div className="navbarContainerRightItem">
                  <Link className="link" to="/register">
                    Register
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="navbarContainerRightItem">
                  <Link className="link" to="/discover">
                    Discover
                  </Link>
                </div>
                <div className="navbarContainerRightItem">
                  <Link className="link" to="/profile">
                    {user?.name}
                  </Link>
                </div>
                <div className="navbarContainerRightItem">
                  <Link
                    style={{
                      background: "tomato",
                      padding: "8px 16px",
                      borderRadius: "4px",
                    }}
                    onClick={logout}
                    className="link"
                    to="/profile"
                  >
                    Logout
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
      {/* SIDEBAR PART */}
      <div
        className={`
                ${
                  openSidebar ? "translateForSidebar" : "translateForSidebarNeg"
                }
                setSidebarForToggle transform transition-all duration-300`}
      >
        {/* <button
          className="SidebarToggleBtn"
          onClick={() => setOpenSidebar(false)}
        >
          X
        </button> */}
        <Hamburger toggle={setOpenSidebar} toggled={openSidebar} color="#000" />

        <ul className="SidebarItems">
          {/* {navRoutesRight.map((item) => (
            <li key={item.name} className="SidebarItem">
              <Link className="link" to={item.route}>
                {item.name}
              </Link>
            </li>
          ))} */}
          <li className="SidebarItem">
            <Link className="" to="/login">
              Login
            </Link>
          </li>
          <li className="SidebarItem">
            <Link className="" to="/register">
              Register
            </Link>
          </li>
          <li className="SidebarItem">
            <Link className="" to="/booking">
              Booking
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
