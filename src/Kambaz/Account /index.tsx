import { Routes, Route, Navigate } from "react-router";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";



export default function Account() {
    return (
        <div>
            <table>
                <tr>
                    <td valign="top">
                    </td>
                    <td valign="top">

                        <Routes>
                            <Route path="/" element={<Navigate to="Signin" />} />
                            <Route path="Signin" element={<Signin />} />
                            <Route path="Signup" element={<Signup />} />
                            <Route path="Profile" element={<Profile />} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}