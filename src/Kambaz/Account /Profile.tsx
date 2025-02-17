import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
    return (
        <div id="wd-signup-screen">
            <h1>Profile</h1>
            <Form.Control id="wd-username"
                placeholder="username"
                value="tstandard"
                className="mb-2" />
            <Form.Control id="wd-password"
                placeholder="password" type="password"
                className="mb-2"
                value="abc" />
            <Form.Control id="wd-first"
                placeholder="First Name"
                className="mb-2"
                value="Tara" />
            <Form.Control id="wd-last"
                placeholder="Last Name"
                className="mb-2"
                value="Standard" />
            <Form.Control type="date"
                value="2005-07-21"
                id="wd-dob"
                className="mb-2" />
            <Form.Control id="wd-email"
                placeholder="janedoe@gmail.com"
                className="mb-2"
                value="taramstandard@gmail.com" />
            <Form.Control id="wd-user-type"
                placeholder="User Type"
                className="mb-2"
                value="User" />
            <Link id="wd-signout-btn"
                to="/Kambaz/Account/Signin"
                className="btn bg-danger text-white w-100 mb-2">
                Signout</Link>
        </div>
    );
}
