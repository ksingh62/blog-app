import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
// import './header.css'

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log(location);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  const getNavItemClass = (slug) => {
    return `inline-block px-6 py-2 duration-200 hover:bg-purple-200 rounded-full hover:text-[#1f1a24] ${
      location.pathname === slug ? "bg-purple-800" : ""
    }`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-3 shadow bg-[#131315] text-[#EFD9CE] border-b-2 border-gray-600">
      <Container>
        {/* <DarkMode /> */}
        <nav className="flex justify-between">
          <div className="mr-4 self-center ">
            <Link to="/">
              <Logo width="100px" />
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-[#EFD9CE] p-2">
              {isMobileMenuOpen ? "✖" : "☰"} {/* Toggle Icon */}
            </button>
          </div>

          <ul
            className={`md:flex md:ml-auto ${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="md:ml-4">
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setIsMobileMenuOpen(false);
                    }}
                    className={getNavItemClass(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="md:ml-4">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
export default Header;
