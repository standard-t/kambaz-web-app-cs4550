import { Link } from "react-router";

export default function KambazNavigation() {
    return (
        <div>
            <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br />
            <Link to="/Kambaz/Account/Account">Account</Link> <br />
            <Link to="/Kambaz/Dashboard">Dashboard</Link><br />
            <Link to="/Kambaz/Courses/1234/Home">Courses</Link>  <br />
            <Link to="/Kambaz/Labs">Labs</Link><br />
            <Link to="/Kambaz/Inbox">Inbox</Link>  <br />
            <Link to="/Kambaz/Calendar">Calendar</Link>  <br />
            <Link to="/Kambaz/History">History</Link>  <br />
            <Link to="/Kambaz/Help">Help</Link>
        </div>
    )
}