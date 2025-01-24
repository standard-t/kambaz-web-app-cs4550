import { Navigate, Route, Routes } from "react-router";
import Account from "./Account ";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Labs from "../Labs";

export default function Kambaz() {
    return (
        <div id="wd-kambaz">
            <table>
                <tr>
                    <td valign="top"> <KambazNavigation /></td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Account" />} />
                            <Route path="Account/*" element={<Account />} />
                            <Route path="Dashboard" element={<Dashboard />} />
                            <Route path="Courses/:cid/*" element={<Courses />} />
                            <Route path="Labs/*" element={<Labs />} />
                        </Routes>
                    </td>
                </tr>
            </table>

        </div >
    );
}