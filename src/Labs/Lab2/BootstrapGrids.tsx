import { Row, Col } from "react-bootstrap";

export default function BootstrapGrids() {
    return (
        <div>
            <h3>Bootstrap Grids</h3>
            <Row>
                <Col sm={2} xxl={1} className="bg-success text-white">Col 1</Col>
                <Col className="bg-danger text-white">Col 2</Col>
                <Col sm={2} xxl={1} className="bg-primary text-white">Col 3</Col>
            </Row>
            <Row>
                <Col className="bg-success text-white">Col 1</Col>
                <Col className="bg-danger text-white">Col 2</Col>
                <Col className="bg-primary text-white">Col 3</Col>
            </Row>
            <hr />
        </div>
    )
}