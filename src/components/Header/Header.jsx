import { useState} from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import './Header.scss'

const Header = () => {
  const [dropDownNone, setDropDownNone] = useState(true);
  const [dropdownGlobal, setDropdownGlobal] = useState(true); // Renamed variable

  const toggleDropdown = () => {
    setDropDownNone(!dropDownNone);
  };

  const toggleDropdownGlobal = () => { // Renamed function
    setDropdownGlobal(!dropdownGlobal);
  };

  return (
    <nav className="NavMenu">
      <div className="navItems">
        <div className="item" onClick={toggleDropdown}>
          <a href="example.com" className="itemLink">
            Home
          </a>
          <MdKeyboardArrowDown style={{ fontSize: '22px' }} />
          {!dropDownNone && (
            <div className="dropDown">
              <span className="homeDrop">
                <a href="example.com" className="itemLinks">
                  Default
                </a>
              </span>
              <span className="homeDrop">
                <a href="example.com" className="itemLinks">
                  Home Boxed
                </a>
              </span>
              <span className="homeDrop">
                <a href="example.com" className="itemLinks">
                  Home RTL
                </a>
              </span>
            </div>
          )}
        </div>
        <div className="item" onClick={toggleDropdownGlobal}>
          <a href="example.com" className="itemLink">
            GlobalNews
          </a>
          <MdKeyboardArrowDown style={{ fontSize: '22px' }} />
          {!dropdownGlobal && ( // Updated condition
            <div className="dropDown">
              <span className="homeDrop">
                <a href="example.com" className="itemLinks">
                  Default
                </a>
              </span>
              <span className="homeDrop">
                <a href="example.com" className="itemLinks">
                  Home Boxed
                </a>
              </span>
              <span className="homeDrop">
                <a href="example.com" className="itemLinks">
                  Home RTL
                </a>
              </span>
            </div>
          )}
        </div>
        <div className="item">
          <a href="example.com" className="itemLink">Sports</a>
        </div>
        <div className="item">
          <a href="example.com" className="itemLink">National</a>
        </div>
        <div className="item">
          <a href="example.com" className="itemLink">Financial</a>
        </div>
        <div className="item">
          <a href="example.com" className="itemLink">Technology</a>
        </div>
        <div className="item">
          <a href="example.com" className="itemLink">LifeStyle</a>
        </div>
        <div className="item">
          <a href="example.com" className="itemLink">Pages</a>
          <MdKeyboardArrowDown style={{ fontSize: "22px" }} />
        </div>
        <div className="item">
          <a href="example.com" className="itemLink">Travel</a>
          <MdKeyboardArrowDown style={{ fontSize: "22px" }} />
        </div>
        <div className="item">
          <a href="example.com" className="itemLink">Category</a>
          <MdKeyboardArrowDown style={{ fontSize: "22px" }} />
        </div>
        <div className="item">
          <FaSearch style={{ fontSize: "32px" }} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
