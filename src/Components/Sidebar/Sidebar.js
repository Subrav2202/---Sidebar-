import React from "react";
import Sidenavdata from "./Sidenavdata";
import { MdClose } from "react-icons/md";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Sidebar({ callback, close, id }) {
  const clickHandler = () => {
    if (id === "hamburger") close();
    else callback();
  };
  return (
    <>
      <div className="d-flex justify-content-around align-items-center p-3 header">
        <h2>NeoSOFT</h2>
        <Button variant="outline-light" onClick={() => clickHandler(id)}>
          <MdClose />
        </Button>
      </div>
      <div className="py-3" style={{ backgroundColor: "#030214" }}>
        {Sidenavdata.map((item, index) => {
          return (
            <div>
              <NavLink
                key={index}
                to={item.link}
              >
                <div
                  className="d-flex px-5 py-3 menus"
                  id={
                    window.location.pathname === item.link
                      ? "active"
                      : "notactive"
                  }
                >
                  <i className="wthname">{item.icon}</i>
                  <h6 className="mx-3" style={{ color: "#bdb199" }}>
                    {item.name}
                  </h6>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Sidebar;
