import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoMdSpeedometer } from "react-icons/io";
import { LuBookText, LuInbox, LuCalendarDays, LuClock8 } from "react-icons/lu";
import { HiOutlineBeaker } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";



export default function KambazNavigation() {

    const { pathname } = useLocation();
    const links = [
        { to: "/Kambaz/Account", icon: RiAccountCircleLine, text: "Account" },
        { to: "/Kambaz/Dashboard", icon: IoMdSpeedometer, text: "Dashboard" },
        { to: "/Kambaz/Courses", icon: LuBookText, text: "Courses" },
        { to: "/Kambaz/Inbox", icon: LuInbox, text: "Inbox" },
        { to: "/Kambaz/Calendar", icon: LuCalendarDays, text: "Calendar" },
        { to: "/Kambaz/History", icon: LuClock8, text: "History" },
        { to: "/Kambaz/Help", icon: BiHelpCircle, text: "Help" },
        { to: "/Kambaz/Labs", icon: HiOutlineBeaker, text: "Labs" }
    ]

    return (
        <ListGroup className="rounded-0 z-2 d-none d-md-block bg-black position-fixed top-0 bottom-0 left-0">
            <ListGroup.Item
                action
                className={`bg-black text-danger border-0 text-center`}
                href="https://www.northeastern.edu/">
                <img src="/images/northeastern.png" width="60px" />
            </ListGroup.Item>


            {
                links.map((link, index) => (
                    <ListGroup.Item
                        key={index}
                        className={`${pathname.includes(link.text) ? 'bg-white text-danger' : 'bg-black'} bg-black text-white border-0 text-center`}
                        as={Link}
                        to={link.to}
                    >
                        <span className={`${pathname.includes(link.text) ? 'text-danger' : 'text-white'}`}>
                            {link.icon({ className: "fs-1 text-danger" })}
                            <br />
                            {link.text}
                        </span>

                    </ListGroup.Item>
                ))
            }
        </ListGroup >
    )
}