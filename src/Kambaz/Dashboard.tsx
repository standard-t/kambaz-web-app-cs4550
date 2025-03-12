
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, updateCourse, deleteCourse } from "./Courses/coursesReducer";
import { addEnrollment, deleteEnrollment } from "./enrollmentsReducer";

export default function Dashboard(
) {
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [enrolling, setEnrolling] = useState(false);
    const [course, setCourse] = useState({
        name: "New Course",
        description: "new course description",
        _id: Math.random().toString()
    });
    const [theCourses, setTheCourses] = useState(courses);
    const dispatch = useDispatch();
    const add = () => {
        dispatch(addCourse(course));
        dispatch(addEnrollment({
            user: currentUser._id,
            course: course._id
        }))

    }

    const update = () => {
        dispatch(updateCourse(course));
    }

    const remove = (courseToDelete: any) => {
        dispatch(deleteCourse(courseToDelete))
    }

    const enrollInCourse = (course: any, enrollOrNot: boolean) => {
        if (enrollOrNot) {
            dispatch(addEnrollment({
                user: currentUser._id,
                course: course._id
            }));
        } else {
            const enrollment = enrollments.find((e: any) => e.course === course._id && e.user === currentUser._id);
            dispatch(deleteEnrollment(enrollment._id));
        }
    }

    useEffect(() => {
        console.log(enrollments);
        if (enrolling) {
            setTheCourses(courses.map((c: any) => {
                // determine if current user is enrolled in c
                const enrolled = enrollments.some(
                    (enrollment: any) =>
                        enrollment.user === currentUser._id
                        && enrollment.course === c._id
                );
                return { ...c, enrolled }
            }))
        } else {
            setTheCourses(courses.filter((course: any) => enrollments.some(
                (enrollment: any) =>
                    enrollment.user === currentUser._id
                    && enrollment.course === course._id
            )).map((c: any) => ({ ...c, enrolled: true })))
        }
    }, [enrollments, enrolling]);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard {currentUser.firstName}</h1> <hr />
            {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (<>
                <h2>Course Editor</h2>
                <Button variant="warning" className="mb-2 float-end" onClick={update}>Update Course</Button>
                <Button variant="success" className="mb-2 me-2 float-end" onClick={add}>Add New Course</Button>
                <br />
                <FormControl className="mb-2" onChange={(e) => { setCourse({ ...course, name: e.target.value }) }} value={course.name} />
                <FormControl className="mb-4" onChange={(e) => { setCourse({ ...course, description: e.target.value }) }} value={course.description} />
            </>)}
            <div className="d-flex">
                <h2 id="wd-dashboard-published">Published Courses ({courses.filter((course: any) => enrollments.some(
                    (enrollment: any) =>
                        enrollment.user === currentUser._id
                        && enrollment.course === course._id
                )).length})</h2>
                <Button className="ms-5" onClick={() => setEnrolling(!enrolling)}>{enrolling ? "My Courses" : "Enrollments"}</Button>
            </div>
            <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Row xs={1} md={5} className="g-4">
                        {theCourses
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
                                            {enrolling && <Button onClick={(e) => {
                                                e.preventDefault();
                                                enrollInCourse(course, !course.enrolled)
                                            }} className="me-2 mb-2">{course.enrolled ? 'Unenroll' : 'Enroll'}</Button>}
                                            {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (<>
                                                <div className="float-end mb-2">
                                                    {enrolling && <Button onClick={(e) => {
                                                        e.preventDefault();
                                                        enrollInCourse(course, !course.enrolled)
                                                    }} className="me-2 mb-2">{course.enrolled ? 'Unenroll' : 'Enroll'}</Button>}
                                                    <Button variant="warning"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        className="me-2 mb-2">Edit</Button>
                                                    <Button variant="danger"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            remove(course._id);
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
