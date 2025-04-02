
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { addEnrollment, deleteEnrollment, setEnrollments } from "./enrollmentsReducer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "./Courses/client";
import * as accountClient from "./Account/client";


export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: { courses: any[], course: any; setCourse: (course: any) => void; addNewCourse: () => void; deleteCourse: (course: any) => void; updateCourse: () => void; }
) {


    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const dispatch = useDispatch();
    const [enrolling, setEnrolling] = useState(false);


    const fetchEnrollments = async () => {
        let enrollments = [];
        try {
            enrollments = await accountClient.findEnrollments();
        } catch (error) {
            console.error(error);
        }
        dispatch(setEnrollments(enrollments));
    };

    const toggleEnrolling = () => {
        setEnrolling(!enrolling);
    };


    const filteredCourses = enrolling
        ? courses
        : courses.filter((course) =>
            enrollments.some(
                (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
            )
        );

    const isEnrolled = (courseId: any) => {
        return enrollments.some(
            (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === courseId
        );
    };


    const removeEnrollment = async (enrollmentId: string) => {
        await coursesClient.deleteEnrollment(enrollmentId);
        dispatch(deleteEnrollment(enrollmentId));
    }

    const makeEnrollment = async (enrollment: any) => {
        await coursesClient.createEnrollment(enrollment);
        dispatch(addEnrollment(enrollment));
    }

    const getEnrollmentId = (userId: string, courseId: string): string => {
        const enrollment = enrollments.find(
            (enrollment: any) =>
                enrollment.user === userId &&
                enrollment.course === courseId
        );

        return enrollment ? enrollment._id : "none";
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
                <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2>
                <Button className="ms-5" onClick={() => { toggleEnrolling() }}>{enrolling ? "My Courses" : "Enrollments"}</Button>
            </div>
            <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Row xs={1} md={5} className="g-4">
                        {filteredCourses
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
                                                /// unenroll button
                                            {enrolling && isEnrolled(course._id) && <Button onClick={(e) => {
                                                e.preventDefault();
                                                removeEnrollment(getEnrollmentId(currentUser._id, course._id));
                                            }}
                                                className="me-2 mb-2">"Unenroll"</Button>}

                                                /// enroll button
                                            {enrolling && !isEnrolled(course._id) && <Button onClick={(e) => {
                                                e.preventDefault();
                                                makeEnrollment({ user: currentUser._id, course: course._id });
                                            }}
                                                className="me-2 mb-2">"Unenroll"</Button>}
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
