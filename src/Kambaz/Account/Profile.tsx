import { Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as client from "./client";
export default function Profile() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [profile, setProfile] = useState<any>(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchProfile = () => {
        if (!currentUser)
            return navigate("/Kambaz/Account/Signin");
        setProfile(currentUser);
    };
    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kambaz/Account/Signin");
    };
    const updateProfile = async () => {
        const updatedProfile = await client.updateUser(profile);
        dispatch(setCurrentUser(updatedProfile));
    };

    useEffect(() => { fetchProfile(); }, []);
    return (
        <div className="wd-profile-screen">
            <h3>Profile</h3>
            {profile && (<div>
                <FormControl className="mb-2" defaultValue={profile.username} placeholder="Username" onChange={(e) =>
                    setProfile({ ...profile, username: e.target.value })} />
                <FormControl className="mb-2" defaultValue={profile.password} placeholder="Password" onChange={(e) =>
                    setProfile({ ...profile, password: e.target.value })} />
                <FormControl className="mb-2" defaultValue={profile.firstName} placeholder="First Name" onChange={(e) =>
                    setProfile({ ...profile, firstName: e.target.value })} />
                <FormControl className="mb-2" defaultValue={profile.lastName} placeholder="Last Name" onChange={(e) =>
                    setProfile({ ...profile, lastName: e.target.value })} />
                <FormControl className="mb-2" defaultValue={profile.dob} onChange={
                    (e) => setProfile({ ...profile, dob: e.target.value })}
                    type="date" />
                <FormControl className="mb-2" defaultValue={profile.email} placeholder="email" onChange={
                    (e) => setProfile({ ...profile, email: e.target.value })} />
                <select defaultValue={profile.role} onChange={(e) => setProfile({
                    ...profile, role: e.target.value
                })}
                    className="form-control mb-2" id="wd-role">
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                </select>
                <div className="d-flex float-end">
                    <Button onClick={updateProfile} className="btn btn-primary m-1"> Update </Button>
                    <Button className="m-1" variant="danger" onClick={signout}> Sign out </Button>
                </div>

            </div>)}</div>);
}

