import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Labs from "../Labs";
import db from "./Database";

import "./styles.css";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";


export default function Kambaz() {
    const [courses] = useState(db.courses);
    return (
        <div id="wd-kambaz">
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account/*" element={<Account />} />
                    <Route path="Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
                    <Route path="Labs/*" element={<Labs />} />
                    <Route path="Inbox" element={<h1>Inbox</h1>} />
                    <Route path="Calendar" element={<h1>Calendar</h1>} />
                    <Route path="History" element={<h1>History</h1>} />
                    <Route path="Help" element={<h1>Help</h1>} />
                </Routes>
            </div>
        </div >
    );
}