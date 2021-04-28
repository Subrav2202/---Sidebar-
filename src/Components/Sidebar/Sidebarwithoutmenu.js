import React from "react";
import Switch from "../Main/Componententry/Switch";
import { Col,Button } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import Sidenavdata from "./Sidenavdata";
import { NavLink } from "react-router-dom";

function Sidebarwithoutmenu({ callback, name }) {
  return (
    <>
      <Col
        xs={12}
        sm={2}
        xl={1}
        className="p-0 m-0"
        style={{ boxSizing: "border-box" }}
      >
        <div className="d-flex justify-content-around align-items-center p-3 header">
          <Button variant="outline-light" onClick={callback}>
            <FiMenu />
          </Button>
        </div>
        <div className="py-3" style={{ backgroundColor: "#030214" }}>
          {Sidenavdata.map((item, index) => {
            return (
              <NavLink key={index} to={item.link}>
                <div
                  className="d-flex justify-content-center px-5 py-3 menus"
                  id={
                    window.location.pathname === item.link
                      ? "active"
                      : "notactive"
                  }
                >
                  <i className="woutname">{item.icon}</i>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Col>
      <Col>
        <Switch component={name} />
      </Col>
    </>
  );
}

export default Sidebarwithoutmenu;
