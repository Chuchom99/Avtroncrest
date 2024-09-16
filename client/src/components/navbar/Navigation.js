import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";
import logo from "../../assets/logoo.png";
import Dropdown from "react-bootstrap/Dropdown";
import MenuIcon from "@mui/icons-material/Menu";


const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navigation">
      <div className="first flex">
        <div className="nav-logo">
          <Link to="/">
            <img className="brand-logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-links flex">
          <span className="nav-link">
            {" "}
            <Link to="/about-us">About us</Link>{" "}
          </span>

          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
              className="nav-link"
            >
              Mirror Trading
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/copy-trading">Options copy trading</Dropdown.Item>
              <Dropdown.Item href="/advanced-trading">Advanced trading account above PDT</Dropdown.Item>
              <Dropdown.Item href="/live-trading">Live trading interface</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
              className="nav-link"
            >
              Trading Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/forex">Forex Trading</Dropdown.Item>
              <Dropdown.Item href="/stock">Stock Trading</Dropdown.Item>
              <Dropdown.Item href="/futures">Futures Trading</Dropdown.Item>
              <Dropdown.Item href="/commodity-stock">
                Commodity stock Trading
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


          <span className="nav-link">
            {" "}
            <Link to="/insight">Insight</Link>{" "}
          </span>

          <span className="nav-link">
            {" "}
            <Link to="/software">Software</Link>{" "}
          </span>
        </div>
      </div>

      <div className="second flex">
        {/* <TranslateWidget /> */}

        <Link to="/login">
          <button className="log ">Login</button>
        </Link>
        <div className="">
          <button onClick={toggleDropdown} className="mn-btn d-lg-none">
            {" "}
            <MenuIcon style={{color: "#000"}} />{" "}
          </button>
          {isDropdownOpen && (
            <div className="nav-links coll">
              <span className="nav-link">
                {" "}
                <Link style={{color: "#fff"}} to="/about-us">About us</Link>{" "}
              </span>
              <Dropdown data-bs-theme="light"
              // style={{height: "100%"}}
              >
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                  className="nav-link"
                  style={{marginLeft: ".5px"}}
                >
                  Mirror Trading
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/copy-trading">Options copy trading</Dropdown.Item>
                  <Dropdown.Item href="/advanced-trading">Advanced trading account above PDT</Dropdown.Item>
                  <Dropdown.Item href="/live-trading">Live trading interface</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown data-bs-theme="dark">
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                  className="nav-link"
                  style={{marginLeft: ".5px"}}
                >
                  Trading Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/futures">Futures Trading</Dropdown.Item>
                  <Dropdown.Item href="/stock">Stock Trading</Dropdown.Item>
                  <Dropdown.Item href="/forex">Forex Trading</Dropdown.Item>
                  <Dropdown.Item href="/commodites">
                    Commodity stock Trading
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link to="/insight">
                <span className="nav-link">Insight</span>
              </Link>
              <Link to="/software">
                <span className="nav-link">Software</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
