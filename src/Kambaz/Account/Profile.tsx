import { Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchProfile = () => {
        if (!currentUser)
            return navigate("/Kambaz/Account/Signin");
        setProfile(currentUser);
    };
    const signout = () => {
        dispatch(setCurrentUser(null));
        navigate("/Kambaz/Account/Signin");
    };
    useEffect(() => { fetchProfile(); }, []);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div className="wd-profile-screen">
            <h3>Profile</h3>
            {profile && (<div>
                <FormControl className="mb-2" defaultValue={profile.username} onChange={(e) =>
                    setProfile({ ...profile, username: e.target.value })} />
                <FormControl className="mb-2" defaultValue={profile.password} onChange={(e) =>
                    setProfile({ ...profile, password: e.target.value })} />
                <FormControl className="mb-2" defaultValue={profile.firstName} onChange={(e) =>
                    setProfile({ ...profile, firstName: e.target.value })} />
                <FormControl className="mb-2" defaultValue={profile.lastName} onChange={(e) =>
                    setProfile({ ...profile, lastName: e.target.value })} />
                <FormControl className="mb-2" defaultValue={profile.dob} onChange={
                    (e) => setProfile({ ...profile, dob: e.target.value })}
                    type="date" />
                <FormControl className="mb-2" defaultValue={profile.email} onChange={
                    (e) => setProfile({ ...profile, email: e.target.value })} />
                <select onChange={(e) => setProfile({
                    ...profile, role: e.target.value
                })}
                    className="form-control mb-2" id="wd-role">
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                </select>
                <Button className="mb-2" variant="danger" onClick={signout}> Sign out </Button>
            </div>)}</div>);
}

