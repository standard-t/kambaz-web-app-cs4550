import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import db from "../Database";
import { FormControl, Button } from "react-bootstrap";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = () => {
        const user = db.users.find(
            (u: any) => u.username === credentials.username &&
                u.password === credentials.password);
        if (!user) return;
        dispatch(setCurrentUser(user));
        navigate("/Kambaz/Dashboard");
    };
    return (
        <div id="wd-signin-screen">
            <h1>Sign in</h1>
            <p>username: ada <br />password: 123</p>
            <FormControl defaultValue={credentials.username}
                onChange={(e) => setCredentials({
                    ...credentials, username: e.target.value
                })}
                className="mb-2" placeholder="username" />
            <FormControl defaultValue={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value
                })}
                className="mb-2"
                placeholder="password" type="password" />
            <Button onClick={signin}
                variant="primary" className="w-100" > Sign in </Button>
            <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
                Sign up </Link>
        </div>
    );
}

