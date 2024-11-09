import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaBriefcase,
  FaUserFriends,
  FaEnvelope,
  FaBell,
  FaUserCircle,
  FaBuilding,
  FaFileAlt,
  FaQuestionCircle,
  FaCogs,
  FaFileContract,
  FaBlog,
  FaUserPlus,
  FaSignInAlt,
} from "react-icons/fa";
import { MdOutlinePrivacyTip, MdOutlineContactPage } from "react-icons/md";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Jobs", icon: <FaBriefcase />, href: "/jobs" },
    { label: "Profile", icon: <FaUserCircle />, href: "/profile" },
    { label: "Connection", icon: <FaUserFriends />, href: "/connection" },
    { label: "Company Profile", icon: <FaBuilding />, href: "/company-profile" },
    { label: "Job Profile", icon: <FaFileAlt />, href: "/job-profile" },
    { label: "Messages", icon: <FaEnvelope />, href: "/messages" },
    { label: "Notifications", icon: <FaBell />, href: "/notifications" },
    { label: "404 Not Found", icon: <FaQuestionCircle />, href: "/404" },
    { label: "FAQ", icon: <FaQuestionCircle />, href: "/faq" },
    { label: "Terms", icon: <FaFileContract />, href: "/terms" },
    { label: "Privacy", icon: <MdOutlinePrivacyTip />, href: "/privacy" },
    { label: "Blog", icon: <FaBlog />, href: "/blog" },
    { label: "Blog Single", icon: <FaFileAlt />, href: "/blog-single" },
    { label: "Contact", icon: <MdOutlineContactPage />, href: "/contact" },
    { label: "Pricing", icon: <FaCogs />, href: "/pricing" },
    { label: "Maintenance", icon: <FaCogs />, href: "/maintenance" },
    { label: "Coming Soon", icon: <FaCogs />, href: "/coming-soon" },
    { label: "Components", icon: <FaCogs />, href: "/components" },
    { label: "Sign In", icon: <FaSignInAlt />, href: "/sign-in" },
    { label: "Sign Up", icon: <FaUserPlus />, href: "/sign-up" },
  ];

  return (
    <nav className="px-4 py-2 bg-gray-800 shadow-lg text-white">
      <div className="flex justify-between items-center">
        {/* Logo and Search */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-600 rounded">
            <a href="/">
              <img
                className="w-10 h-10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSay6Qz3TtL3aItc57KWQgmbjndp2Hm5wJzPg&s"
                alt="Logo"
              />
            </a>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block px-2 py-2 w-[16rem] border text-sm rounded-lg bg-gray-800 text-white border-gray-700 focus:outline-none"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Brand Name */}
        <div className="hidden md:block">
          <h2 className="text-2xl font-bold text-blue-500">Infinity-jobs</h2>
        </div>

        {/* Menu Items */}
        <div
          className={`flex-col md:flex-row md:flex items-center space-x-6 ${
            menuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <div className="flex items-center space-x-4">
            <FaBriefcase className="text-xl cursor-pointer" title="Jobs" />
            <span><a href="/jobs">Jobs</a></span>
            <FaUserFriends className="text-xl cursor-pointer" title="Connections" />
            <span><a href="/connection">Connections</a></span>
          </div>

          {/* Pages Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="text-gray-300 font-semibold hover:text-white text-sm px-2 py-1 bg-gray-800 rounded-md hover:bg-gray-700 transition-all duration-300">
              Pages
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-1 w-56 bg-gray-800 shadow-lg rounded-md py-1 z-50">
              {menuItems.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={`flex items-center px-2 py-1 space-x-1 text-sm rounded-md transition-all duration-300 ${
                        active ? "bg-gray-700 text-white" : "text-gray-300"
                      }`}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>

          {/* Icons */}
          <FaEnvelope className="text-xl cursor-pointer" title="Messages" />
          <FaBell className="text-xl cursor-pointer" title="Notifications" />

          {/* Profile Image */}
          <div className="w-8 h-8 rounded-full bg-gray-600 cursor-pointer">
            <a href="/profile">
              <img
                className="w-8 h-8 rounded-full"
                src="./assids/shubha.jpeg"
                alt="Profile"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
