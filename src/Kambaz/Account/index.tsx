import { Routes, Route, Navigate } from "react-router";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import { useSelector } from "react-redux";
import Users from "./Users";


export default function Account() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div>
            <table>
                <tr>
                    <td valign="top">
                    </td>
                    <td valign="top">
                        <div className="d-flex">
                            <Routes>
                                <Route path="/" element={<Navigate to={currentUser ? "Profile" : "Signin"} />} />
                                <Route path="Signin" element={<Signin />} />
                                <Route path="Signup" element={<Signup />} />
                                <Route path="Profile" element={<Profile />} />
                                <Route path="/Users" element={<Users />} />
                                <Route path="/Users/:uid" element={<Users />} />
                            </Routes>
                        </div>
                    </td>
                </tr>
            </table>
        </div >
    );
}