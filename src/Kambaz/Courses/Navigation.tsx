import { ListGroup } from "react-bootstrap";
import { Link } from "react-router";

export default function CoursesNavigation() {
    return (
        <ListGroup className="rounded-0 wd-secondary-nav-list">
            <ListGroup.Item className="active border-0" as={Link} to="/Kambaz/Courses/1234/Home">Home</ListGroup.Item>
            <ListGroup.Item className="text-danger bg-white border-0" as={Link} to="/Kambaz/Courses/1234/Modules">Modules</ListGroup.Item>
            <ListGroup.Item className="text-danger bg-white border-0" as={Link} to="/Kambaz/Courses/1234/Assignments">Assignments</ListGroup.Item>
            <ListGroup.Item className="text-danger bg-white border-0" as={Link} to="/Kambaz/Courses/1234/Quizzes">Quizzes</ListGroup.Item>
            <ListGroup.Item className="text-danger bg-white border-0" as={Link} to="/Kambaz/Courses/1234/Grades">Grades</ListGroup.Item>
            <ListGroup.Item className="text-danger bg-white border-0" as={Link} to="/Kambaz/Courses/1234/Piazza">Piazza</ListGroup.Item>
            <ListGroup.Item className="text-danger bg-white border-0" as={Link} to="/Kambaz/Courses/1234/Zoom">Zoom</ListGroup.Item>
            <ListGroup.Item className="text-danger bg-white border-0" as={Link} to="/Kambaz/Courses/1234/People">People</ListGroup.Item>
        </ListGroup>
    )
}