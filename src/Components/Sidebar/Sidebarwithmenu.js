import React,{useState} from "react";
import { Col, Button } from "react-bootstrap";
import Switch from "../Main/Componententry/Switch";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar"

function Sidebarwithmenu({ callback, name }) {
  const [SidebarHandle, setSidebaHandler] = useState(false)
  return (
    <>
      <Col sm={12} xs={12} id="Hamburger">
      {
        SidebarHandle?<Sidebar close={()=>setSidebaHandler(!SidebarHandle)} id="hamburger"/>:
        <div className="d-flex justify-content-between align-items-center">
          <h2>NeoSOFT</h2>
          <Button variant="outline-light" onClick={()=>setSidebaHandler(!SidebarHandle)}>
            <FiMenu color="black" size="30px" />
          </Button>
        </div>
      }
      </Col>

      <Col
        lg={3}
        xl={2}
        className="p-0 m-0 notcollapse"
        style={{ boxSizing: "border-box" }}
      >
       <Sidebar callback={callback} id="normal"/>
      </Col>
      <Col>
        <Switch component={name} />
      </Col>
    </>
  );
}

export default Sidebarwithmenu;
