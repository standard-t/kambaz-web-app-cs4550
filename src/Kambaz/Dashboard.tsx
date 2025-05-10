
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Row xs={1} md={5} className="g-4">
                        <Col className="wd-dashboard-course"
                            style={{ width: "300px" }}>
                            <Card>
                                <Link className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                                    to="/Kambaz/Courses/1234/Home">
                                    <Card.Img variant="top" width="100%"
                                        src="/images/design.jpg" height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS1234 React JS</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack software developer</Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                        <Col className="wd-dashboard-course"
                            style={{ width: "300px" }}>
                            <Card>
                                <Link className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                                    to="/Kambaz/Courses/1234/Home">
                                    <Card.Img variant="top" width="100%"
                                        src="/images/design.jpg" height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS1234 React JS</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack software developer</Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                        <Col className="wd-dashboard-course"
                            style={{ width: "300px" }}>
                            <Card>
                                <Link className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                                    to="/Kambaz/Courses/1234/Home">
                                    <Card.Img variant="top" width="100%"
                                        src="/images/design.jpg" height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS1234 React JS</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack software developer</Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                        <Col className="wd-dashboard-course"
                            style={{ width: "300px" }}>
                            <Card>
                                <Link className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                                    to="/Kambaz/Courses/1234/Home">
                                    <Card.Img variant="top" width="100%"
                                        src="/images/design.jpg" height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS1234 React JS</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack software developer</Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                        <Col className="wd-dashboard-course"
                            style={{ width: "300px" }}>
                            <Card>
                                <Link className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                                    to="/Kambaz/Courses/1234/Home">
                                    <Card.Img variant="top" width="100%"
                                        src="/images/design.jpg" height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS1234 React JS</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack software developer</Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                        <Col className="wd-dashboard-course"
                            style={{ width: "300px" }}>
                            <Card>
                                <Link className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                                    to="/Kambaz/Courses/1234/Home">
                                    <Card.Img variant="top" width="100%"
                                        src="/images/design.jpg" height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS1234 React JS</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack software developer</Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
