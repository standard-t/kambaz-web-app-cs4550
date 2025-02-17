import { Link } from "react-router";

export default function AccountNavigation() {
    return (
        <div>
            <Link to="/Kambaz/Account/Signin">SignIn</Link> <br />
            <Link to="/Kambaz/Account/Signup">SignUp</Link><br />
            <Link to="/Kambaz/Account/Profile">Profile</Link>
        </div>
    )
}