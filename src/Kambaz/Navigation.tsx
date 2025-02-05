import { ListGroup } from "react-bootstrap";
import { Link } from "react-router";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoMdSpeedometer } from "react-icons/io";
import { LuBookText, LuInbox, LuCalendarDays, LuClock8 } from "react-icons/lu";
import { HiOutlineBeaker } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";



export default function KambazNavigation() {
    return (
        <ListGroup className="rounded-0 z-2 d-none d-md-block bg-black position-fixed top-0 bottom-0 left-0">
            <ListGroup.Item className="bg-black text-danger border-0 text-center"><a href="https://www.northeastern.edu/"><img src="images/northeastern.png" height="50px" /></a></ListGroup.Item>
            <ListGroup.Item className="bg-black text-white border-0 text-center" as={Link} to="/Kambaz/Account"><RiAccountCircleLine className="fs-1" /> <br /> Account</ListGroup.Item>
            <ListGroup.Item className="bg-white text-danger border-0 text-center" as={Link} to="/Kambaz/Dashboard"><IoMdSpeedometer className="fs-1" /> <br /> Dashboard</ListGroup.Item>
            <ListGroup.Item className="bg-black text-danger border-0 text-center" as={Link} to="/Kambaz/Courses/1234/Home"><LuBookText className="fs-1" /> <br /> Courses</ListGroup.Item>
            <ListGroup.Item className="bg-black text-danger border-0 text-center" as={Link} to="/Kambaz/Inbox"><LuInbox className="fs-1" /> <br />Inbox</ListGroup.Item>
            <ListGroup.Item className="bg-black text-danger border-0 text-center" as={Link} to="/Kambaz/Calendar"><LuCalendarDays className="fs-1" /> <br /> Calendar</ListGroup.Item>
            <ListGroup.Item className="bg-black text-danger border-0 text-center" as={Link} to="/Kambaz/History"><LuClock8 className="fs-1" /> <br />History</ListGroup.Item>
            <ListGroup.Item className="bg-black text-danger border-0 text-center" as={Link} to="/Kambaz/Help"><BiHelpCircle className="fs-1" /> <br /> Help</ListGroup.Item>
            <ListGroup.Item className="bg-black text-danger border-0 text-center" as={Link} to="/Kambaz/Labs"><HiOutlineBeaker className="fs-1" /> <br />Labs</ListGroup.Item>
        </ListGroup>
    )
}