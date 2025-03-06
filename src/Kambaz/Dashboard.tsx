
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import db from "./Database"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Dashboard({
    editCourse,
    addCourse,
    deleteCourse,
    setCourse,
    courses,
    course
}: {
    editCourse: () => void;
    addCourse: () => void;
    deleteCourse: (courseId: string) => void;
    setCourse: (course: any) => void;
    courses: any;
    course: any;

}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard {currentUser.firstName}</h1> <hr />
            {currentUser && currentUser.role === "ADMIN" && (<>
                <h2>Course Editor</h2>
                <Button variant="success" className="float-end" onClick={editCourse}>Save Changes</Button>
                <Button variant="primary" className="me-2 float-end" onClick={addCourse}>Add New Course</Button>

                <FormControl onChange={(e) => { setCourse({ ...course, name: e.target.value }) }} value={course.name} />
                <FormControl onChange={(e) => { setCourse({ ...course, description: e.target.value }) }} value={course.description} />
            </>)}
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Row xs={1} md={5} className="g-4">
                        {courses.filter((course: any) => enrollments.some(
                            (enrollment) =>
                                enrollment.user === currentUser._id
                                && enrollment.course === course._id
                        ))
                            .map((course: any) => (<Col className="wd-dashboard-course"
                                style={{ width: "300px" }}>
                                <Card>
                                    <Link className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                                        to={`/Kambaz/Courses/${course._id}/Home`}>
                                        <Card.Img variant="top" width="100%"
                                            src="/images/design.jpg" height={160} />
                                        <Card.Body>
                                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                {course.name}</Card.Title>
                                            <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                                {course.description}</Card.Text>
                                            {currentUser && currentUser.role === "ADMIN" && (<>
                                                <div className="float-end mb-2">
                                                    <Button variant="warning"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        className="m-2">Edit</Button>
                                                    <Button variant="danger"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            deleteCourse(course._id);
                                                        }}
                                                    >Delete</Button>
                                                </div>
                                            </>)}
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>))}
                    </Row>
                </div>
            </div>
        </div>
    );
}
