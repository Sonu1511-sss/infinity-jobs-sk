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
    { label: "Company Profile", icon: <FaBuilding />, href: "/company/:companyName" },
    { label: "Job Profile", icon: <FaFileAlt />, href: "/job-profile" },
    { label: "Messages", icon: <FaEnvelope />, href: "/messages" },
    { label: "Notifications", icon: <FaBell />, href: "/notification" },
    { label: "404 Not Found", icon: <FaQuestionCircle />, href: "/*" },
    { label: "FAQ", icon: <FaQuestionCircle />, href: "/faq" },
    { label: "Terms", icon: <FaFileContract />, href: "/terms" },
    { label: "Privacy", icon: <MdOutlinePrivacyTip />, href: "/privacy" },
    { label: "Blog", icon: <FaBlog />, href: "/blog" },
    { label: "Blog Single", icon: <FaFileAlt />, href: "/blog-single" },
    { label: "Contact", icon: <MdOutlineContactPage />, href: "/contact" },
    { label: "Pricing", icon: <FaCogs />, href: "/pricing" },
    { label: "Coming Soon", icon: <FaCogs />, href: "/coming-soon" },
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

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[4rem] left-0 right-0 bg-gray-800 z-50 p-4 md:hidden">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-gray-300 py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                <div className="flex items-center">
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </div>
              </a>
            ))}
            <button
              className="mt-4 w-full py-2 bg-red-600 text-white rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Close
            </button>
          </div>
        )}

        {/* Menu Items */}
        <div className={`hidden md:flex items-center space-x-6`}>
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
         <a href="/messages"><FaEnvelope className="text-xl cursor-pointer" title="Messages" /></a> 
         <a href="/notification"><FaBell className="text-xl cursor-pointer" title="Notifications" /></a> 

          {/* Profile Image */}
          <div className="w-8 h-8 rounded-full bg-gray-600 cursor-pointer">
            <a href="/sign-in">
              <img
                className="w-8 h-8 rounded-full"
                src="https://media.licdn.com/dms/image/v2/D4D03AQEI2Q6g0iYJ6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1731205970568?e=1736985600&v=beta&t=iajxgOUHtsKGnwpNe1jQyzcHOv0gJMAEM1gBWS39Rxg"
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
