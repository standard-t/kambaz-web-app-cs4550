
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { setEnrollments } from "./enrollmentsReducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userClient from "./Account/client";


export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: { courses: any[], course: any; setCourse: (course: any) => void; addNewCourse: () => void; deleteCourse: (course: any) => void; updateCourse: () => void; enrolling: boolean; setEnrolling: (enrolling: boolean) => void; updateEnrollment: (courseId: string, enrolled: boolean) => void; }
) {


    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();



    const fetchEnrollments = async () => {
        let enrollments = [];
        try {
            enrollments = await userClient.findEnrollments();
        } catch (error) {
            console.error(error);
        }
        dispatch(setEnrollments(enrollments));
    };

    const toggleEnrolling = () => {
        setEnrolling(!enrolling);
    };






    useEffect(() => {
        fetchEnrollments();
    }, [dispatch]);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard {currentUser.firstName}</h1> <hr />
            {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (<>
                <h2>Course Editor</h2>
                <Button variant="warning" className="mb-2 float-end" onClick={updateCourse}>Update Course</Button>
                <Button variant="success" className="mb-2 me-2 float-end" onClick={addNewCourse}>Add New Course</Button>
                <br />
                <FormControl className="mb-2" onChange={(e) => { setCourse({ ...course, name: e.target.value }) }} value={course.name} />
                <FormControl className="mb-4" onChange={(e) => { setCourse({ ...course, description: e.target.value }) }} value={course.description} />
            </>)}
            <div className="d-flex">
                <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
                <Button className="ms-5" onClick={() => { toggleEnrolling() }}>{enrolling ? "My Courses" : "Enrollments"}</Button>
            </div>
            <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Row xs={1} md={5} className="g-4">
                        {courses
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

                                            {enrolling && (
                                                <Button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        updateEnrollment(course._id, !course.enrolled);
                                                    }}
                                                    className="me-2 mb-2"
                                                >
                                                    {course.enrolled ? "Unenroll" : "Enroll"}
                                                </Button>
                                            )}

                                            {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (<>
                                                <div className="float-end mb-2">
                                                    <Button variant="warning"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        className="me-2 mb-2">Edit</Button>
                                                    <Button variant="danger"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            deleteCourse(course._id);
                                                        }}
                                                        className="mb-2"
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
