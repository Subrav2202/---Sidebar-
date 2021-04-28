import Sidenavwithmenu from "./Sidenavwithmenu";
import Sidenavwithoutmenu from "./Sidenavwithoutmenu";
import { Container, Row } from "react-bootstrap";

function Sidebargrid({show,Hide,name}) {
    return (
        <>
        <Container fluid>
        <Row>
          {show ? (
            <Sidenavwithoutmenu callback={Hide} name={name}/>
          ) : (
            <Sidenavwithmenu callback={Hide} name={name}/>
          )}
        </Row>
      </Container>
        </>
    )
}

export default Sidebargrid
