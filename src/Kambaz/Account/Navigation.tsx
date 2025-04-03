
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { pathname } = useLocation();
    const active = (path: string) => (pathname.includes(path) ? "active" : "");
    return (
        <div>
            <Link to="/Kambaz/Account/Signin">SignIn</Link> <br />
            <Link to="/Kambaz/Account/Signup">SignUp</Link><br />
            <Link to="/Kambaz/Account/Profile">Profile</Link>
            {currentUser && currentUser.role === "ADMIN" && (
                <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link>)}
        </div>
    )
}